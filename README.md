Backend: 1. заходим в папку silantproject и активируем виртуальное окружение -тvenv\scripts\activate.
2. Если зависимости проекта не установились автоматически: тогда pip install -r requirements.txt в терминале. 
В каталоге backend/silantproject/silantproject создаем файл .env и прописываем в нем SECRET_KEY = cгенерированный https://djecrety.ir/ 
Запускаем сервер из каталога silantproject (python manage.py runserver).

3. Открываем frontend: в терминале устанавливаем зависимости - npm i и запускаем наш проект - npm start.
