import React from 'react'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link'

export const step1 = [
    <div>
        <p>Тестировщик (инженер по тестированию), он же QA-инженер (Quality Assurance) — это специалист, который проверяет качество программного обеспечения и уровень его соответствия заранее определенным потребностям и ожидаемым результатам.</p>
        <p>Когда в России говорят «тестировщик», подразумевают одну из двух специализаций: Quality Assurance (QA) или Quality Control (QC).</p>
        <ul>
            <li>QC-специалист отвечает за то, чтобы результат работы программистов соответствовал цели: контролирует анализ кода и находит ошибки в работе ПО.</li>
            <li>QA-специалист не только контролирует, но и обеспечивает качество работы продукта. Он отвечает и за работу ПО, и за сами процессы его разработки: выбирает инструменты, помогает предотвращать ошибки и совершенствовать продукт.</li>
        </ul>
        <p>Это очень общая и не совсем серьёзная классификация. На самом деле тестировщики бывают разные: специалисты автоматизированного тестирования, тестировщики СУБД, аналитики тестирования, разработчики-тестировщики, тестировщики-DevOPs и проч. Всё зависит от того, какие скиллы соединяет в себе каждый конкретный специалист.</p>
        <p>В общем и целом работу инженера по тестированию можно свести к такому порядку: получил ПО → определил необходимый набор тестов → сопоставил реальное положение косяков, костылей, велосипедов и багов с ожидаемым результатом работы программы (аппаратно-программного комплекса) → завёл баги → работаешь с ними, пока они не закроются. Всё это, конечно, в цикле.</p>    
    </div>
]; 
export const step2 = [
    <div>
        <p>Кроме стандартного пути внутри тестирования (от стажёра к лиду), есть несколько наиболее вероятных путей развития карьеры тестировщика.</p>
        <ul>
            <li>Разработка программного обеспечения — логичный и не самый сложный путь для тех, кто увлечётся языками программирования и захочет не только ковырять чужой код и готовый проект, но и создавать что-то внутри команды.</li>
            <li>Руководитель проекта. Отличное знание проекта в целом, понимание потребностей и требований клиентов — прямой путь к этой точке.</li>
            <li>Скрам мастер — интересный разворот, который у тестировщиков хорошо удаётся благодаря опять же знаниям проекта в целом и умениям жёстко планировать сроки работ.</li>
            <li>Бизнес-аналитик, внедренец — денежные, но не столь технические должности для ребят с прокачанными коммуникативными навыками.</li>
        </ul>
    </div>
];
export const step3 = [
    <div>
         <Typography variant="h4">Игра. Поиск багов</Typography>
         <p>
            Предлагается картинка на которой нужно находить жуков и кликать по ним.
         </p>
    </div>
];
export const step4 = [
     <div>
         <Typography variant="h4">Тестировщики — «низшая каста» ИТ-отрасли</Typography>
         <p>Вот сейчас обидно было. Или это как у ВДВ, но «не кодил — не айтишник»? Отдел тестирования — это по сути настоящий отдел контроля качества, который не позволит компании опозориться перед клиентом (если где-то упадёт навороченный костыль, хе-хе), вовремя определит явные ошибки UI/UX, проверит внутреннюю логику работы приложения или сервиса. Комплексная работа тестировщиков всех ИТ-компаний мира обеспечивает определённый уровень качества и сохраняет миллионы денег компаний, которые могли бы потеряться на жалобах конечных пользователей на бесконечные баги.</p>
         <p>Тестировщики — это полноценные, сильные ИТ-специалисты, которые отличаются комплексным подходом к ПО и АПК, глубоким знанием продукта и умением видеть неочевидные взаимосвязи внутри разработок. </p>
         <Typography variant="h4">Тестирование — это просто поиск ошибок</Typography>
        <p>Нет. Тестирование — это сложный сквозной процесс работы с продуктом, его аппаратным и программным окружением, а также с документацией. Найти баг — очень малое дело, а вот проанализировать, воспроизвести, собрать всю информацию, снять дампы, составить тест-план и автоматизировать рутинные задачи, пустить нагрузку и т.д. это уже сложная, многопрофильная работа.</p>
     </div>
];
export const step5 = [
    <div>
        <p>В принципе, тестировщик может быть интровертом или экстравертом, геймером или ролевиком, добрым или не очень. Коммуникативные навыки играют в команде определённую роль, но в целом хватит общей адекватности и умения выражать свои мысли. В тестировании нужны другие, более тонкие настройки личности.</p>
        <ul>
            <li>Аналитические навыки, чтобы понимать взаимосвязи, анализировать огромные массивы данных, результаты тестов и т.д.</li>
            <li>Управление временем и скиллы планирования — только с ними можно обеспечить высокую производительность на фоне серьёзной рабочей нагрузки.</li>
        </ul>
    </div>
];


export const finalStep = [
    <div>
        <Typography variant="h4">Success!</Typography>
        <p>Успех, вы закончили работу над интернет магазином, отдали заказчику.</p>
        <p>
            Мы рассмотрели базовые циклы разработки ПО и познакомились с профессиями в IT.
        </p>
    </div>
];