const crypto = require("crypto");

class SessionManager {
  constructor() {
    this.sessions = new Map();

    // Tiempo máximo de inactividad (30 minutos)
    this.timeout = 30 * 60 * 1000;
  }

  createSession() {
    const sessionId = crypto.randomUUID();

    const session = {
      id: sessionId,

      createdAt: new Date(),

      lastActivity: new Date(),

      history: [],

      stats: {
        questions: 0,
        inputTokens: 0,
        outputTokens: 0,
        totalResponseTime: 0,
      },
    };

    this.sessions.set(sessionId, session);

    return session;
  }

  getSession(sessionId) {
    return this.sessions.get(sessionId) || null;
  }

  getAllSessions() {
    return Array.from(this.sessions.values());
  }

  updateActivity(sessionId) {
    const session = this.getSession(sessionId);

    if (!session) {
      return false;
    }

    session.lastActivity = new Date();

    return true;
  }

  addMessage(sessionId, role, content) {
    const session = this.getSession(sessionId);

    if (!session) {
      return false;
    }

    session.history.push({
      role,
      content,
    });

    session.lastActivity = new Date();

    if (role === "user") {
      session.stats.questions++;
    }

    return true;
  }

  deleteSession(sessionId) {
    return this.sessions.delete(sessionId);
  }

  cleanExpiredSessions() {
    const now = Date.now();

    for (const [id, session] of this.sessions.entries()) {
      if (now - session.lastActivity.getTime() > this.timeout) {
        this.sessions.delete(id);
      }
    }
  }
}

module.exports = new SessionManager();
