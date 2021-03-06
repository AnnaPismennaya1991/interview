// перечень вопросов с вертикальным расположением кнопок radio
const questions = {
    0: {
        title: 'Какой прием пищи для Вас главный?',
        type: 'radio',
        items: [
            { id: 1, name: 'Завтрак' },
            { id: 2, name: 'Обед' },
            { id: 3, name: 'Ужин' }
        ]
    },

    1: {
        title: 'Главный прием пищи:',
        type: 'radio',
        items: [
            { id: 1, name: 'Вы готовите сами, используя свежие продукты питания' },
            { id: 2, name: 'Едите в ресторане' },
            { id: 3, name: 'Вы греете предварительно подготовленные, купленные блюда' }
        ]
    },

    2: {
        title: 'В выходные Вы едите обед:',
        type: 'radio-input',
        items: [
            { id: 1, name: 'Приготовленные домашние блюда' },
            { id: 2, name: 'В ресторане' },
            { id: 3, name: 'Не обедаю' },
            { id: 4, name: 'Другая возможность:' }
        ]
    },

    3: {
        title: 'У Вас есть ограничения в употреблении каких-либо продуктов питания?',
        type: 'radio-input',
        items: [
            { id: 1, name: 'Нет' },
            { id: 2, name: 'Да (скажите пожалуйста, какие):' }
        ]
    },

    4: {
        title: 'У Вас есть аллергия на какой-либо продукт питания?',
        type: 'radio-input',
        items: [
            { id: 1, name: 'Нет' },
            { id: 2, name: 'Да (скажите пожалуйста, какие):' }
        ]
    },

    5: {
        title: 'Какую часть Вашего питания составляют мясо и мясные изделия?',
        type: 'radio',
        items: [
            { id: 1, name: '90 % и более' },
            { id: 2, name: '75 %' },
            { id: 3, name: '50 %' },
            { id: 4, name: '25 %' },
            { id: 5, name: 'Менее 25 %' }
        ]
    },

    6: {
        title: 'Какую часть Вашего питания составляют овощи и продукты неживотного происхождения?',
        type: 'radio',
        items: [
            { id: 1, name: '90 % и более' },
            { id: 2, name: '75 %' },
            { id: 3, name: '50 %' },
            { id: 4, name: '25 %' },
            { id: 5, name: 'Менее 25 %' }
        ]
    },

    7: {
        title: 'Есть ли у Вас проблемы с холестерином?',
        type: 'radio-input',
        items: [
            { id: 1, name: 'Да' },
            { id: 2, name: 'Нет' },
            { id: 3, name: 'Не знаю' }
        ]
    },

    8: {
        title: 'Какой у Вас индекс массы тела (BMI index)?',
        type: 'radio',
        items: [
            { id: 1, name: 'Менее18,5 (недовес)' },
            { id: 2, name: '18,5-25 (идеальный вес)' },
            { id: 3, name: '25-30 (избыточный вес)' },
            { id: 4, name: '30-35 (умеренная полнота)' },
            { id: 5, name: '35-40 (средняя полнота)' },
            { id: 6, name: 'Более 40' }
        ]
    }

}

export default questions;
