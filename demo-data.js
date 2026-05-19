// demo-data.js
const DEMO_DATA = [
    {
      id: 'c1',
      title: 'Проекты',
      items: [
        {
          id: 'f1',
          label: 'Сайт-лендинг',
          type: 'folder',
          description: 'Главный лендинг проекта',
          children: [
            {
              id: 'f1a',
              label: 'Макеты',
              type: 'folder',
              description: 'Дизайн-макеты',
              children: [
                { id: 'u1', label: 'home.fig', type: 'file', description: 'Главная страница', tags: ['Быстро', 'Дёшево'] },
                { id: 'u2', label: 'about.fig', type: 'file', description: 'Страница о нас', tags: [] }
              ]
            },
            { id: 'u3', label: 'index.html', type: 'file', description: 'HTML шаблон', tags: ['Быстро'] },
            { id: 'u4', label: 'styles.css', type: 'file', description: 'Стили', tags: ['Дёшево', 'Болит'] }
          ]
        },
        {
          id: 'f2',
          label: 'API сервис',
          type: 'folder',
          description: 'Бэкенд API',
          children: [
            { id: 'u5', label: 'server.py', type: 'file', description: 'Основной сервер', tags: ['Болит'] },
            { id: 'u6', label: 'config.yaml', type: 'file', description: 'Конфигурация', tags: ['Быстро'] }
          ]
        },
        { id: 'u9', label: 'README.md', type: 'file', description: 'Документация проекта', tags: ['Дёшево'] }
      ]
    },
    {
      id: 'c2',
      title: 'Документы',
      items: [
        {
          id: 'f3',
          label: 'ТЗ',
          type: 'folder',
          description: 'Технические задания',
          children: [
            { id: 'u10', label: 'spec_v1.docx', type: 'file', description: 'Первая версия', tags: ['Болит'] },
            { id: 'u11', label: 'spec_v2.docx', type: 'file', description: 'Вторая версия', tags: [] }
          ]
        },
        { id: 'u13', label: 'Контракт.pdf', type: 'file', description: 'Договор с клиентом', tags: [] }
      ]
    },
    {
      id: 'c3',
      title: 'Медиа',
      items: [
        {
          id: 'f4',
          label: 'Логотипы',
          type: 'folder',
          description: 'Бренд-ассеты',
          children: [
            { id: 'u15', label: 'logo.svg', type: 'file', description: 'Основной логотип', tags: ['Быстро', 'Дёшево'] }
          ]
        },
        { id: 'u20', label: 'promo.mp4', type: 'file', description: 'Промо видео', tags: ['Болит'] }
      ]
    }
  ];
  
  // Начальные связи (опционально)
  const INITIAL_LINKS = {
    "u1": ["u3"],      // home.fig → index.html
    "u3": ["u5"],      // index.html → server.py
    "u5": ["u10"]      // server.py → spec_v1.docx
  };