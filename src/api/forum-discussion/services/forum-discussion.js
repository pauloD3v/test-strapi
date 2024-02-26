'use strict';

/**
 * forum-discussion service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::forum-discussion.forum-discussion');
