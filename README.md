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

## Запуск dev сервера

#### Первым запускаем dev сервер бэкенда в его папке

```bash
yarn dev
```

#### Потом переходим в папку с фронтом и параллельно, с запущенным бэкендом, запускаем dev сервер приложения

```bash
yarn start
```
