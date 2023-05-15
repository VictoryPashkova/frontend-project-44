#!/usr/bin/env node

import { isEvenGame, isEvenDescription } from '../src/games/isEven.js';
import game from '../src/index.js';

game(isEvenDescription, isEvenGame);
