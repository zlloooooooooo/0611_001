//import fetch from 'node-fetch'; // Импорт fetch 
import fetch from 'node-fetch'

const apiKey = 'cc5195eba952855449606c7a4e8c502e'; // Замените на ваш API ключ 
const apiUrl = 'https://api.vacationplanner.ru/v1/vacations/current'; 

const getVacations = async () => { 
  try { 
    const response = await fetch(apiUrl, { 
      headers: { 
        'accept': 'application/json', 
        'Authorization': `Bearer ${apiKey}` 
      } 
    }); 

    if (!response.ok) { 
      throw new Error(`Ошибка получения данных: ${response.status}`); 
    } 

    const data = await response.json(); 
    console.log(data); // Вывод полученных данных 

  } catch (error) { 
    console.error('Ошибка при получении данных:', error); 
  } 
}; 

getVacations();
