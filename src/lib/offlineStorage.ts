import { openDB, DBSchema, IDBPDatabase } from 'idb';

interface OfflineDB extends DBSchema {
  'quiz-results': {
    key: string;
    value: {
      id: string;
      category: string;
      title: string;
      score: number;
      totalQuestions: number;
      tokensEarned: number;
      completedAt: string;
      synced: boolean;
    };
  };
  'user-progress': {
    key: string;
    value: {
      id: string;
      aframTokens: number;
      level: number;
      completedQuizzes: string[];
      achievements: string[];
      lastUpdated: string;
      synced: boolean;
    };
  };
  'course-content': {
    key: string;
    value: {
      id: string;
      category: string;
      title: string;
      content: any;
      lastCached: string;
    };
  };
  'farmer-posts': {
    key: string;
    value: {
      id: string;
      content: string;
      category: string;
      author: string;
      createdAt: string;
      synced: boolean;
    };
  };
}

class OfflineStorageManager {
  private db: IDBPDatabase<OfflineDB> | null = null;

  async init() {
    if (this.db) return this.db;

    this.db = await openDB<OfflineDB>('afram-edutech-offline', 1, {
      upgrade(db) {
        // Quiz results store
        if (!db.objectStoreNames.contains('quiz-results')) {
          db.createObjectStore('quiz-results', { keyPath: 'id' });
        }

        // User progress store
        if (!db.objectStoreNames.contains('user-progress')) {
          db.createObjectStore('user-progress', { keyPath: 'id' });
        }

        // Course content store
        if (!db.objectStoreNames.contains('course-content')) {
          db.createObjectStore('course-content', { keyPath: 'id' });
        }

        // Farmer posts store
        if (!db.objectStoreNames.contains('farmer-posts')) {
          db.createObjectStore('farmer-posts', { keyPath: 'id' });
        }
      },
    });

    return this.db;
  }

  // Quiz Results
  async saveQuizResult(result: any) {
    const db = await this.init();
    const quizResult = {
      id: `${result.category}-${Date.now()}`,
      category: result.category,
      title: result.title,
      score: result.score,
      totalQuestions: result.totalQuestions,
      tokensEarned: result.tokensEarned,
      completedAt: new Date().toISOString(),
      synced: false,
    };
    
    await db.put('quiz-results', quizResult);
    return quizResult;
  }

  async getQuizResults() {
    const db = await this.init();
    return await db.getAll('quiz-results');
  }

  async getUnsyncedQuizResults() {
    const db = await this.init();
    const results = await db.getAll('quiz-results');
    return results.filter(result => !result.synced);
  }

  async markQuizResultSynced(id: string) {
    const db = await this.init();
    const result = await db.get('quiz-results', id);
    if (result) {
      result.synced = true;
      await db.put('quiz-results', result);
    }
  }

  // User Progress
  async saveUserProgress(progress: any) {
    const db = await this.init();
    const userProgress = {
      id: 'current-user',
      aframTokens: progress.aframTokens,
      level: progress.level,
      completedQuizzes: progress.completedQuizzes,
      achievements: progress.achievements,
      lastUpdated: new Date().toISOString(),
      synced: false,
    };
    
    await db.put('user-progress', userProgress);
    return userProgress;
  }

  async getUserProgress() {
    const db = await this.init();
    return await db.get('user-progress', 'current-user');
  }

  async markUserProgressSynced() {
    const db = await this.init();
    const progress = await db.get('user-progress', 'current-user');
    if (progress) {
      progress.synced = true;
      await db.put('user-progress', progress);
    }
  }

  // Course Content
  async saveCourseContent(courseId: string, category: string, title: string, content: any) {
    const db = await this.init();
    const courseContent = {
      id: courseId,
      category,
      title,
      content,
      lastCached: new Date().toISOString(),
    };
    
    await db.put('course-content', courseContent);
    return courseContent;
  }

  async getCourseContent(courseId: string) {
    const db = await this.init();
    return await db.get('course-content', courseId);
  }

  async getAllCourseContent() {
    const db = await this.init();
    return await db.getAll('course-content');
  }

  // Farmer Posts
  async saveFarmerPost(post: any) {
    const db = await this.init();
    const farmerPost = {
      id: `post-${Date.now()}`,
      content: post.content,
      category: post.category || 'General',
      author: post.author,
      createdAt: new Date().toISOString(),
      synced: false,
    };
    
    await db.put('farmer-posts', farmerPost);
    return farmerPost;
  }

  async getFarmerPosts() {
    const db = await this.init();
    return await db.getAll('farmer-posts');
  }

  async getUnsyncedFarmerPosts() {
    const db = await this.init();
    const posts = await db.getAll('farmer-posts');
    return posts.filter(post => !post.synced);
  }

  async markFarmerPostSynced(id: string) {
    const db = await this.init();
    const post = await db.get('farmer-posts', id);
    if (post) {
      post.synced = true;
      await db.put('farmer-posts', post);
    }
  }

  // Sync functionality
  async syncWithServer() {
    if (!navigator.onLine) return false;

    try {
      // Sync quiz results
      const unsyncedQuizResults = await this.getUnsyncedQuizResults();
      for (const result of unsyncedQuizResults) {
        // Here you would sync with Supabase
        await this.markQuizResultSynced(result.id);
      }

      // Sync user progress
      const userProgress = await this.getUserProgress();
      if (userProgress && !userProgress.synced) {
        // Here you would sync with Supabase
        await this.markUserProgressSynced();
      }

      // Sync farmer posts
      const unsyncedPosts = await this.getUnsyncedFarmerPosts();
      for (const post of unsyncedPosts) {
        // Here you would sync with Supabase
        await this.markFarmerPostSynced(post.id);
      }

      return true;
    } catch (error) {
      console.error('Sync failed:', error);
      return false;
    }
  }
}

export const offlineStorage = new OfflineStorageManager();