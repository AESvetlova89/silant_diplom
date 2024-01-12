Backend: 1. заходим в папку silantproject и активируем виртуальное окружение - venv\scripts\activate.
2. Если зависимости проекта не установились автоматически: тогда pip install -r requirements.txt в терминале. 
В каталоге backend/silantproject/silantproject создаем файл .env и прописываем в нем SECRET_KEY = cгенерированный https://djecrety.ir/ 
Запускаем сервер из каталога silantproject (python manage.py runserver).

Frontend: 1. в терминале устанавливаем зависимости - npm i 
2. запускаем наш проект - npm start.
