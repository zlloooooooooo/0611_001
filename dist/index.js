"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import fetch from 'node-fetch'; // Импорт fetch 
const node_fetch_1 = __importDefault(require("node-fetch"));
const apiKey = 'cc5195eba952855449606c7a4e8c502e'; // Замените на ваш API ключ 
const apiUrl = 'https://api.vacationplanner.ru/v1/vacations/current';
const getVacations = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, node_fetch_1.default)(apiUrl, {
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            }
        });
        if (!response.ok) {
            throw new Error(`Ошибка получения данных: ${response.status}`);
        }
        const data = yield response.json();
        console.log(data); // Вывод полученных данных 
    }
    catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
});
getVacations();
