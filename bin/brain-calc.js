#!/usr/bin/env node

import { calcGame, calcDescription } from '../src/games/calc.js';
import game from '../src/index.js';

game(calcDescription, calcGame);
