'use strict'                              /* Строгий ввод */
console.log()                             /* Вывод в консоль */
let, const, var                           /* Переменные */
Math.round() (.floor, .ceil)              /* Выделение целого числа */
Math.random()                             /* Случайное число от [0 - 1) */
Math.max(1, 2, 10, 3)                     /* Выбирает максимальное число из набранных */


function fn1 (){}                         /* function declaration */
const a = function (){}                   /* function expression */
const fn1 = (a) => a * a                  /* Стрелочная функция */


const obj = {                             /* Добавление объекта */
	name: "Nick",
	age: 21,
	city: "London"
}
delete obj.age                            /* Удаление ключа */
obj.num = 7                               /* Добавление ключа или изменение его значения */
obj[num] = 7                              /* Добавление ключа или изменение его значения */
for (let key in obj){
	console.log (`${key}  --  ${obj[key]}`)               /* Перечень ключей в объекте и их значения */
}

this.                                     /* Контекст текущего блока кода (Не работает в стрелочных функциях) */

const obj2 = obj2                         /* Копирование объекта как ссылку */
const obj2 = Object.assign({}, obj1)      /* Копирование свойств объекта только на 1 уровень вложенности. После будет ссылка */
const obj2 = {...obj1}                    /* Копирование свойств объекта только на 1 уровень вложенности. После будет ссылка */

const obj2 = structuredClone(obj1)        /* Полное копирование свойств объекта */

const obj2 = JSON.stringify               /* Преобразование объекта в строку */
const obj2 = JSON.parse                   /* Преобразование строки в объект */
const obj2 = JSON.parse(JSON.stringify(obj1))                   /* Полное копирование свойств объекта */



const obj3 {name: nick, age: 21}
const {name: meName, age} = obj3                      /* Деструктуризация объекта на отдельные переменные с изменением названия переменной name */




const users = [
  {id = 1, name = Bob}
  {id = 2, name = Alice}
  {id = 3, name = Charlie}
  {id = 4, name = Costa}
]
for (const {id, name} of users){
  console.log(`User ${id} - ${name}`)                   /* Перечисление всех объектов в массиве */
}

const obj4 {name: "nick", age: 21, color: "blue"}
const {name, ...items} = obj4                           /* Оператор Rest (Запаковка ДО =) в items, создает объект без переменной name */
const obj5 = {...obj4, city: "London"}                  /* Оператор Spread (Распаковка ПОСЛЕ =) из obj4 в obj5 + добавление нового ключа */



Object.keys(obj5)                                       /* Выводит все ключи объекта */
Object.values(obj5)                                     /* Выводит все значения объекта */
Object.entries(obj5)                                    /* Создает массив массивов из объекта */
obj5.hasOwnProperty("name")                             /* Возвращает Bool значение есть ли ключ "name" в массиве */
Object.freeze(obj5)                                     /* Замораживает объект. Нельзя изменять, добавлять, удалять ключи */
Object.seal(obj)                                        /* Запрещает удалять и добавлять ключи. Разрешено изменять значения */
Object.preventExtensions(obj)                           /* Запрещено только добавлять новые ключи */
Object.isFrozen(obj)                                    /* Проверяет заморожен ли объект. Возвращает значение в Bool */

const result1 = num ?? "Значение по умолчанию"          /* Оператор нулевого слияния. Проверяет переменную на NaN и undefined. В положительном случае передает значение после ?? */
obg4?.name                                              /* Оператор опциональной последовательности. Проверяет правильность написания объекта или ключа */



const arr = [0,1,2,"Hello", function fn1 {console.log("123"), { key: "Pass" }}, 184]                    /* Массивы */
const arrNew = new Array(1, 2, 3);
Array.isArray(value)                                                                /* Проверка массив ли это */
arr.push(40)                                                                      /* Добавляет в конец массива новый элемент */
arr.pop()                                                                         /* Удаляет последний элемент в массиве */
arr.indexOf("Hello")                                                              /* Ищет индекс элемента. В данном случае 3 */
arr.lastIndexOf("Hello")
arr.unshift(100)                                                                  /* Добавляет элемент в начало. Лучше не использовать. (Производительность) */
arr.shift()                                                                       /* Удаляет первый элемент. Лучше не использовать. (Производительность) */
const arr2 = arr.slice(2, 5)/* () */                                              /* Копирует из массива Arr со [2 элемента до 5) не включительно. Можно скопировать весь массив() */
const removeItem = arr.splice(2, 3, 1, 6, 7)            /* ВЫрезает из массива 3 элемента, начиная с индекса 2. Запись идет в removeItem. Из arr элементы удаляются/ Можно добавлять элементы в удаленный промежуток arr (1, 6, 7) */
const removeItem1 = arr.toSpliced(2, 3, 1, 6, 7)                                                 /* Копирует массив без трех элементов, начиная со 2 индекса включительно/ Из arr элементы не удаляются/ Можно добавлять элементы в удаленный промежуток removeItem1 (1, 6, 7) */
const arr3 = arr.concat(arr2, 1,3,5)                /* Объединяет массивы arr и arr2, а так же добавляет новые элементы 1,3,5 */

for(const item of arr){                       /* Цикл перебора всех элементов в массиве */
  console.log(item)                           /* Вывод всех элементов массива */
}
arr.forEach(item, index, arr) => console.log (`${item} ${index} ${arr}`)            /* Перебор массива и вывод индекса, значения и всего массива */
arr.toString()                                                                      /* Перевод элементов массива в тип строка */
const arr4 = arr.map((index) => index * index)                                      /* Копирует массив, преобразовывая каждый элемент (Квадрат элемента) */

const f = arr.filter((index) => index > 1)                                             /* Фильтрует массив по заданному условию */
const find = arr.find((i) => i => > 2)                                                 /* Возвращает первый элемент в массиве, подходящий к условию */
const includes = arr.includes("Hell", 2)                                                  /* Возвращает Bool, если в массиве есть символы в из скобок второе значение - индекс, с которого проверяется массив */
arr.reduce(acc, item, index, arr)
arr.reduce((acc, item) => acc + item)                                                       /* Функция, выполняемая для каждого элемента массива. Её возвращаемое значение становится значением параметра accumulator. Чаще всего для сложения чисел в массиве*/
arr.reduceRight((acc, item) => acc + item)
arr.reverse()                                                                           /* Переворачивает все элементы в исходном массиве */
const arrReverse = arr.toReversed()                                                     /* Копирует и переворачивает все элементы в новом массиве */
arr.sort()                                                                              /* Сортирует ПЕРВЫЕ ЦИФРЫ к возрастанию. Меняет исходный массив*/
arr.sort((a, b) => a - b)                                                               /* Сортирует числа к возрастанию. Меняет исходный массив */
const sort = arr.toSorted()                                                             /* Сортирует числа к возрастанию. НЕ меняет исходный массив */
const copy = arr.with(2, "Yes")                                                         /* Копирует массив с изменением значения на "Yes" по индексу 2 */
arr.some((num) => num % 2 === 0)                                                        /* Возвращает Bool значение, если хоть один элемент будет подходить условию */
arr.every((num) => num % 2 === 0)                                                       /* Возвращает Bool значение, если все элементы будет подходить условию */
arr.findIndex((num) => num > 30)                                                        /* Возвращает индекс в массиве, значение которого подходит под условия */
const arrFlat = arr.flat(3)                                                                             /* Создаёт новый массив, в который рекурсивно добавляются все элементы подмассивов до заданной глубины. В данном случае до 3 вложенности. Стандарт 1. Пустые ячейки убираются */
arr.flatMap((num) => num > 0 ? num : [])                                                           /* Объединенные flat и map. Можно удалять из массива значения, не подходящие под условия */


let word = "sword arrow shield sword"
word.toApperCase()                                                                      /* Меняет регистр на высокий */
arrWord = word.split(" ")                                 /* Разбивает строку в массив. Можно задать условие разделения. Например, пробел " ", запятая "," */
strWord = arrWord.join(", ")                              /* Объединяет массив в строку. Можно задать условие объединения. Например, пробел " ", запятая "," */
word.replace('sword', 'dagger')                           /* Меняет первое найденное слово в строке на заданное (sword на dagger) */
word.replaceAll('sword', 'dagger')                        /* Меняет все найденные слова в строке на заданное (sword на dagger) */ 


                                                                    /* DOM */    //Представление HTML в виде дерево объектов

const titleH1 = document.getElementById("tytle")                    /* Обращение к id title в документе html */
const classElement = document.getElementsByClassName("d1")          /* Обращение к классу d1 в документе html */
const tagElement = document.getElementsByTagName("div")             /* Обращение к тегу div в документе html */
const query = document.querySelector(".d1")/* p, #id */             /* Возвращает первый подходящий элемент (Класс d1) */
const queryAll = document.querySelectorAll("p")                     /* Возвращает все подходящие элементы */
Array.from(queryAll).forEach((el) => {                              /* Обращение как к массиву. Можно использовать методы массивов */
  el.textContent("Hello")                                           /* Возвращает текстовове содержимое элемента и его потомков, игнорируя любые html теги. Изменение текста */
})                                      
document.getElementById("tytle").innerHTML = "<b>Hello World</b>"     /* Возвращает html содержимое элемента в виде строки, включая все html теги */
document.getElementById("tytle").innerText = "Я шоколадный заяц"      /* Возвращает текстовое содержимое элементов, но игнорирует скрытые элементы и стили */

titleH1.addEventListener('click', function(){                         /* настраивает функцию, которая будет вызываться при каждом поступлении указанного события к цели. (Клик) */
  this.textContent("Вы нажали на кнопку")
})
"mouseover"                                                           /* Наведение на элемент */
"mouseout"                                                            /* Вне элемента */
"DOMContedLoaded"                                                     /* При полной загрузке HTML файла */
"change"
titleH1.addEventListener("presskey", function(event){                 /* При нажатии на кнопку */
if(event.key === "Enter" && input.value.trim() !== ""){}}             /* Кнопка Enter и поле не пустое = true */
titleH1.addEventListener('click', function(event){                    /* Ввод текста */
  this.textContent = event.target.value                               /* Обращается ко всему тексту. Невидимый в том числе. Меняет текст на введенный. .target.value считывает значение с input'а */ /*  используется в обработчиках событий, чтобы определить, на каком элементе произошло событие */
  titleH1.value                                                       /* возвращает значение titleH1 */
})

const link = document.querySelector(".link")
link.setAttribute('href', 'https://www.youtube.com/')                 /* Изменение значения атрибута тега (<a>) */
link.setAttribute('target', '_blank')                                 /* Изменение значения target, чтоб страница не закрывалась при переходе на ссылку */
link.getAttribute("href")                                             /* Получение значения "href" из тега <a> */

titleH1.style.color = "yellow"                                        /* Изменение стиля. Цвет текста */
tagElement.style.backgroundColor = `rgb(256, 0, 100)`                 /* Цвет фона RGB */
let newElement = document.createElement("div")                        /* Создание нового элемента*/
let Element = querySelector(".wrapper")                         
Element.appendChild(newElement)                                 /* Добавление элемента в конец родительского элемента */
Element.prepend(newElement)                                     /* Добавление элемента в начало родительского элемента */
Element.removeChild(newElement)                                 /* Удаляет элемент из родительского элемента */
newElement.parentNode                                                 /* Получение родителя */ ????????????????????????????
Element.insertAdjacentHTML("beforebegin", `<div> Новый элемент перед элементом </div>`) /* Помещает элемент перед указанным элементом */
"afterbegin"                                                          /* Помещает элемент в начале родительского элемента */
"beforeend"                                                           /* Помещает элемент в конце родительского элемента */
"afterend"                                                            /* Помещает элемент после указанного элемента */
Element.classList.add('color-blue')                             /* Добавляет класс color-blue в тег wrapper */
Element.classList.remove('color-blue')                          /* Удаление класса из тега */
Element.remove()                                                /* Удаление элемента */
Element.classList.toggle('color-blue')                          /* Удаление/добавление класса (инвертирует) */
Element.classList.contains("color-blue")                        /* Проверяет наличие класса у элемента wrapper */
InputDeviceInfo.value.trim()                                          /* Удаляет пробелы слева и справа */
Element.parentElement                                                 /* Обращение к родительскому элементу */


Element.dataset.age                                                 /* возвращение значения data атрибута тега Element */
Element.closest(".d1")                                              /* Обращение к ближайшему родителю с классом d1 */














