#!/usr/bin/env node

import { gcdGame, gcdDescription } from '../src/games/gcd.js';
import game from '../src/index.js';

game(gcdDescription, gcdGame);
