#!/usr/bin/env node

import { progressionGame, progressionDescription } from '../src/games/progression.js';
import game from '../src/index.js';

game(progressionDescription, progressionGame);
