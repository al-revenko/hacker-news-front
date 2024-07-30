## Установка

#### Клонируем этот репозиторий:

```bash
git clone https://github.com/al-revenko/hacker-news-front.git
```

или

```bash
git clone -b feature https://github.com/al-revenko/hacker-news-front.git
```

#### Затем клонируем репозиторий с бэкендом приложения

```bash
git clone https://github.com/al-revenko/hacker-news-back.git
```

или

```bash
git clone -b feature https://github.com/al-revenko/hacker-news-back.git
```

#### В папках обоих проектов используем [yarn](https://yarnpkg.com/) для установки зависимостей:

```bash
yarn
```

#### Создаём .env файл в корне frontend приложения и копируем в него содержимое файла .env.example:

```bash
VITE_BACKEND_URL = 'http://localhost:4000'
```

#### То же самое делаем и в корне backend приложения

```bash
API_URL = "https://api.hnpwa.com/v0/"
HOST = "localhost"
PORT = "4000"
```

## Запуск dev сервера

#### Первым запускаем dev сервер бэкенда в его папке

```bash
yarn dev
```

#### Потом переходим в папку с фронтом и параллельно, с запущенным бэкендом, запускаем dev сервер приложения

```bash
yarn start
```
