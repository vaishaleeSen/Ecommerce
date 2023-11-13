'use strict';

// Set the BABEL_ENV and NODE_ENV environment variables to 'test'.
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

// Configure unhandled promise rejections to throw errors.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read from the configuration.
require('../config/env');

const jest = require('jest');
const execSync = require('child_process').execSync;
let argv = process.argv.slice(2);

// Check if the current working directory is inside a Git repository.
function isInGitRepository() {
  try {
    execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

// Check if the current working directory is inside a Mercurial repository.
function isInMercurialRepository() {
  try {
    execSync('hg --cwd . root', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

// Watch for changes during testing, unless on CI or explicitly running all tests.
if (
  !process.env.CI &&
  argv.indexOf('--watchAll') === -1 &&
  argv.indexOf('--watchAll=false') === -1
) {
  // Determine if the project is under source control (e.g., Git or Mercurial).
  const hasSourceControl = isInGitRepository() || isInMercurialRepository();

  // Add the appropriate watch option based on source control presence.
  argv.push(hasSourceControl ? '--watch' : '--watchAll');
}

// Run the Jest test runner with the provided command-line arguments.
jest.run(argv);
