# sandbox
 


#1 Модуль FormCreator: 
Модуль создает кастомную форму 

## Инструкция по запуску: 
1. npm install;
2. npm run dev - запуск проекта. 

Для того, чтобы создать форму, необходимо создать экземпляр класса FormCreator и передать в качестве аргументов 4 значения: 
1. JSON с информацией по полям (формат ниже)
2. Название селектора (STRING), где нужно разместить кастомную форму. 
3. Тег кастомного HTML - элемента.
4. Селектор смены темы. 

Метод ```connectionCallback()``` инициирует создание формы. 
Для отображения формы в HTML, необходимо в разметку вставить тег ```<custom-form></custom-form>```

Формат:
```
{
// - заголовки формы. На текущий момент только имя и айдишник. 
  "headers": {
    "name": "The Best Form Ever",
    "id": 1
  },
// инпуты. Форма принимает неограниченное число инпутов. 
  "inputs": [
    {
      "label": "Имя",
      "type": "text",
      "id": "first_name",
      "placeholder": "First Name"
    },
    {
      "label": "Фамилия",
      "type": "text",
      "id": "last_name",
      "placeholder": "Last Name"
    }
    ...
  ],
  "submit": {
    "url": "www.example.com",
    "method": "POST",
    "text": "Отправить"
  }
}
```
Особенности: В модуле использованы css.modules для инкапсуляции стилей. 


Баги: 
1. В случае возникновения ошибки SELF_SIGNED_CERT_IN_CHAIN, нужно в консоли прописать  ```npm config set registry="http://registry.npmjs.org/"```. Несмотря на то, что у меня её не было на двух ПК (Windows), у товарища возникла. 
