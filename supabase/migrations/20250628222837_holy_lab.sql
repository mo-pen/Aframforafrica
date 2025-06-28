/*
  # Create quiz results table

  1. New Tables
    - `quiz_results`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references user_profiles)
      - `quiz_category` (text)
      - `quiz_title` (text)
      - `score` (integer)
      - `total_questions` (integer)
      - `tokens_earned` (numeric)
      - `completed_at` (timestamp)

  2. Security
    - Enable RLS on `quiz_results` table
    - Add policy for users to read their own quiz results
    - Add policy for users to insert their own quiz results
*/

-- Create quiz_results table
CREATE TABLE IF NOT EXISTS quiz_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES user_profiles(id) ON DELETE CASCADE,
  quiz_category text NOT NULL,
  quiz_title text NOT NULL,
  score integer NOT NULL,
  total_questions integer NOT NULL,
  tokens_earned numeric DEFAULT 0,
  completed_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read own quiz results"
  ON quiz_results
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own quiz results"
  ON quiz_results
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_quiz_results_user_id ON quiz_results(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_results_category ON quiz_results(quiz_category);