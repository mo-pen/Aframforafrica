/*
  # Create farmer posts table for community hub

  1. New Tables
    - `farmer_posts`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references user_profiles)
      - `title` (text)
      - `content` (text)
      - `category` (text)
      - `image_url` (text, optional)
      - `likes_count` (integer, default 0)
      - `comments_count` (integer, default 0)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `farmer_posts` table
    - Add policies for reading, creating, and updating posts
*/

-- Create farmer_posts table
CREATE TABLE IF NOT EXISTS farmer_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES user_profiles(id) ON DELETE CASCADE,
  title text,
  content text NOT NULL,
  category text DEFAULT 'General',
  image_url text,
  likes_count integer DEFAULT 0,
  comments_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE farmer_posts ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can read posts"
  ON farmer_posts
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create own posts"
  ON farmer_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own posts"
  ON farmer_posts
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own posts"
  ON farmer_posts
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create trigger for updated_at
CREATE TRIGGER update_farmer_posts_updated_at
  BEFORE UPDATE ON farmer_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_farmer_posts_user_id ON farmer_posts(user_id);
CREATE INDEX IF NOT EXISTS idx_farmer_posts_category ON farmer_posts(category);
CREATE INDEX IF NOT EXISTS idx_farmer_posts_created_at ON farmer_posts(created_at DESC);