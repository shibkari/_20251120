# React Components Project

Stateful & Stateless Components in React (TypeScript + Vite)

## Опис проекту

Цей проєкт демонструє реалізацію трьох типів React-компонентів у TypeScript:

- Stateful Functional Component — компонент зі станом на хуках
- Stateful Class Component — компонент зі станом у класі
- Stateless Functional Component — простий компонент без власного стану

Проєкт створений з використанням React + TypeScript + Vite, має чисту структуру та підходить для навчання або старту нового застосунку.

## Особливості

- Компоненти з логікою стану (state) та без
- Внутрішні оновлення компонентів (re-renders)
- Чітка структура для масштабованих проєктів
- Реалізований таймер у класовому компоненті
- Лічильник зі змінним кроком
- Компонент відображення користувача
- Оптимізована структура для росту проєкту

## Технології

- React 19 — сучасний UI фреймворк
- TypeScript — статична типізація
- Vite — найшвидший Dev Server
- ESLint — аналізатор якості коду
- CSS — стилізація компонентів

## Структура проекту

my-react-app/
├── src/
│ ├── components/
│ │ ├── Counter.tsx (Stateful Functional Component)
│ │ ├── Counter.css
│ │ ├── Timer.tsx (Stateful Class Component)
│ │ ├── Timer.css
│ │ ├── UserCard.tsx (Stateless Component)
│ │ └── UserCard.css
│ ├── App.tsx (Головний компонент)
│ ├── App.css
│ ├── main.tsx (Точка входу)
│ ├── index.css
│ └── assets/ (Зображення, медіа)
├── public/
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts

## Швидкий старт

Встановлення:

git clone https://github.com/your-username/react-components-project.git
cd my-react-app
npm install
npm run dev

Після запуску: http://localhost:5173

## Доступні скрипти

npm run dev - Режим розробки
npm run build - Збірка для продакшену
npm run preview - Попередній перегляд зібраного
npm run lint - ESLint перевірка

## Додаткова інформація

Типи компонентів у проєкті:

1. Stateful Functional Component (Counter)

- Використовує хуки (useState)
- Оптимальний вибір для сучасних React-проєктів
- Легкий, гнучкий, читаємий

2. Stateful Class Component (Timer)

- Містить this.state
- Використовує componentDidMount, componentWillUnmount
- Дозволяє ознайомитись зі старішим, але ще актуальним підходом

3. Stateless Component (UserCard)

- Лише приймає props
- Немає власного стану
- Ідеальний для UI-елементів

## Патерни та принципи

Single Responsibility Principle (SRP) - Кожен компонент виконує одну задачу і робить це добре

Reusability - Компоненти легко використовувати повторно в інших частинах додатку

Separation of Concerns - Логіка, UI та стилі поділені

Композиція замість наслідування - React побудований навколо композиції компонентів

## Можливості для розширення

- Додати глобальний стан (Redux / Zustand / Context API)
- Перемалювання UI за допомогою CSS Modules чи Tailwind
- Додавання тестування (Vitest / Jest + RTL)
- Додавання API-запитів (axios / fetch)
- Використання React Query для асинхронних даних

## Деплоймент

Vercel:
npm install -g vercel
vercel

Netlify:
npm run build
netlify deploy --prod

## Виконані завдання

- Створено 3 типи компонентів
- Структуровано проєкт у папках
- Реалізовано таймер і лічильник
- Статичний компонент UserCard
- Налаштовано Vite + TypeScript
- Створено README
- Підготовлено до деплою

## Навчальні цілі

- Освоєння шаблонів компонентів у React
- Розуміння стану та типізації у TypeScript
- Робота з хуками та класовими компонентами
- Побудова гнучкої компонентної архітектури
- Формування правильного підходу до структурування додатку

## Автор

shibkari
GitHub: @shibkari

## Ліцензія

MIT License — використовуйте вільно
