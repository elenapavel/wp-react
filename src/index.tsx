import React from 'react'

import { createRoot } from '@wordpress/element';
import {App} from './App';


const domNode = document.getElementById('app');
const root =domNode? createRoot(domNode) :null

root?.render(<App />);