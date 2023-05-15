#!/usr/bin/env node

import { primeGame, primeDescription } from '../src/games/prime.js';
import game from '../src/index.js';

game(primeDescription, primeGame);
