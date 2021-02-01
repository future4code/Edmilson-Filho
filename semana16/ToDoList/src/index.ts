import express, { Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';

const app = express();
app.use(express.json());
app.use(cors());
