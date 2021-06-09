<div dir="rtl" style="padding:0 20% 0 20%">

# ברוכים הבאים למעבדה השנייה ב Vue.js !!! <img src="src/assets/logo.png" width="50" height="43.3" alt="Vue.js Logo">

## הכנה

לפני שנתחיל את  המעבדה, רצוי לעשות את הפעולות הבאות:

1. להוריד את התוספים הבאים לvscode:

   - Prettier - Code formatter
   - Vetur
   - ESLint

> בנוסף מומלץ להוריד גם את התוספים הבאים:
> 
> - vue - של(jcbuisson.vue)
> - Vue 3 Snippets
> - Vue VSCode Snippets
> - Vue Peek

2. להריץ את הפקודה `npm install` בטרמינל לאחר שפתחתם את קבצי המעבדה.
3. לעיין ב[מסמך של צורת הכתיבה הנכונה של Vue](https://vuejs.org/v2/style-guide)

## מבוא

במעבדה זאת נלמד על קומפוננטות, מתי נשתמש בהן ואיך.
בנוסף, נלמד איך להשתמש בaxios מתוך הפרוייקט שלנו על מנת לבקש בקשות מהשרת ולהציג את המידע שהתקבל בקומפוננטה המתאימה.

נתמקד בעמוד הראשי של האפליקציה וספציפית בחלק שבו עליכם להציג משחקים מועדפים עבור משתמש מחובר.

הקבצים שאיתם תעבדו במעבדה הם [MainPage.vue](src/pages/MainPage.vue) עבור העמוד הראשי,  [GamePreview.vue](src/components/GamePreview.vue) עבור התצוגה המקדימה למשחק בודד, ו[FavoriteGames.vue](src/components/FavoriteGames.vue) שמייצג לנו את החלק שממאגד את תצוגות המשחקים.

## פרוייקט Vue:
במעבדה הקודמת דיברנו על כך שקיימים שני סוגים של קבצים שיכולים להשתמש בפונקציונליות של Vue:
  
1. קבצים עם סיומת html  אשר שימשו אותנו במעבדה הקודמת להדגמת דוגמאות פשוטות יותר שלא כוללות היררכיה ותקשורת בין מספר קבצים.
  
   הייבוא של vue בקבצים מסוג זה יהיה באמצעות התגית:
   
<div id="import" dir="ltr" style="padding-left:15%;">

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

</div>

2. קבצים עם סיומת  vue שבהם נשתמש החל מהמעבדה הקרובה, שישמשו אותנו בפרוייקט לצורך מימוש הפרוייקט, עבודה עם קומפוננטות, הגדרת ההיררכיה באפליקציה ועוד.
היום אנחנו נדבר על שימוש בnpm כך שלאחר שהורדנו את Vue, נייבא אותו על ידי השורה:

<div id="import" dir="ltr" style="padding-left:15%;">

```javascript
import Vue from "vue";
```

</div>

### יצירת פרוייקט

הצעד הראשון לפתיחת פרוייקט vue הוא התקנת vue-cli עליו שיר פירטה בהרצאה:

בתיקייה שבה אתם מעוניינים לפתוח את הפרוייקט יש להתקין את npm  (באמצעות הרצת הפקודה npm install בטרמינל) ולאחר מכן להתקין את vue-cli באמצעות הפקודה:
npm install -g @vue/cli

לאחר התקנת vue-cli אתם יכולים לפתוח את הפרוייקט שלכם באמצעות הפקודה vue create. התהליך יכול לקחת כמה דקות.

כתוצאה מהרצת הפקודות הנ"ל תפתח לכם תיקייה עם כל קבצי המסגרת לפרוייקט שלכם, שעליהם נעבור בקצרה.

<!-- > _כמובן, כמו בNode, אם יבאתם את הrepository של המעבדה שבו הnode_modules לא נמצאים, יש צורך להריץ את הפעולה npm install כדי להוריד את כל המודולים שרשומים בpackage.json._ -->

### קבצי הבסיס של הפרוייקט:
כחלק מהפרויקט הבסיסי שלנו נוכל למצוא את הקבצים המרכזיים של הפרויקט והם:

- [index.html](public/index.html) - הקובץ html הראשי שכולל את האלמנט שיהיה הtemplate של האובייקט Vue הראשי (ה-Root instance)
- [App.vue](src/App_example.vue) - הקובץ שמכיל את הקומפוננטה הראשית של הפרויקט
- [main.js](src/main_example.js) - הקובץ שיוצר את אובייקט הVue הראשי (ה-Root instance) ומקשר את index.html לApp.vue
- [assets](src/assets/logo.png) - תיקייה שבה נכיל עזרים סטטים כמו תמונות ורשימות סטטיות (כמו אוסף המדינות)

על מנת להריץ את קבצי המעבדה, יש להריץ את הפקודה:

- npm run serve_example - על מנת להריץ את הדוגמא
- npm run serve_task - על מנת להריץ את המשימה

&nbsp;

## **_קומפוננטה_**

קומפוננטה היא אובייקט Vue, עם שם, שניתן לעשות בה שימוש חוזר.

כל קומפוננטה בפרויקט שלנו מכילה לוגיקה ותצוגה של רכיב מתוך הפרויקט.

באמצעות שימוש בקומפוננטות, במקום שכל הלוגיקה והתצוגה יהיו בקובץ אחד (כמו שראינו במעבדה הקודמת), כעת אנחנו יכולים ליצור הפרדה כך שהאובייקט הראשי יוכל להכיל אוסף קומפוננטות וכל אחת יכולה גם היא להכיל אוסף קומפוננטות.

בצורה זו אנו מחלקים את הקוד לרכיבים שנוח יותר לממש ולאחר מכן גם לבדוק אותם.

**הגדרת קומפוננטה inline:**

זוהי הצורה הבסיסית ביותר להגדרת קומפוננטה, נגדיר את הקומפוננטה באופן הבא בקובץ שבו מוגדר הroot instance:
<div id="import" dir="ltr" style="padding-left:15%;">

In logic section (javascript code):

```javascript
// Define a new component called ButtonCounter
Vue.component("ButtonCounter", {
  // options
  data: function() {
    return {
      count: 0
    };
  },
  template: '<button v-on:click="count++">\
              You clicked me {{ count }} times.\
            </button>'
});

new Vue({ el: "#components-demo" });
```

In template:

```html
<div id="components-demo">
  <ButtonCounter></ButtonCounter>
  <!-- can reuse -->
  <ButtonCounter />
</div>
```

</div>

כאשר אנחנו מגדירים בצורה הזאת את הקומפוננטה, היא נוספת לנו בצורה גלובלית ואין צורך לייבא אותה או לציין שאנחנו משתמשים בה באובייקט שלנו.

עבודה עם `Vue.component` בצורה הזאת, בה אנו מגדירים את הקומפוננטה עם options בתוך הפונקציה component, טובה כאשר הפרוייקט שלנו הוא בגודל קטן~בינוני שמשתמש בjavascript רק כדי לתמוך מעט בחלק מהתצוגות.

כאשר אנחנו מדברים על פרויקט יותר מסובך שמתבסס הרבה יותר על javascript, **לשיטה הזאת יש די הרבה חסרונות, כגון**:

- הגדרת template בצורת מחרוזת לא נוחה לעבודה, במיוחד שהקומפוננטה יכולה להיות גדולה.
- בצורה כזאת אין לנו אפשרות להגדיר עיצוב באמצעות css עבור הקומפוננטה.
- קובץ ארוך ויחסית מסורבל שבו מתרכזת כל האפליקציה.

<!-- No build step restricts us to HTML and ES5 JavaScript, rather than preprocessors like Pug (formerly Jade) and Babel -->

**הגדרת קומפוננטות בקבצים נפרדים:**

הדרך השניה להגדרת קומפוננטה היא באמצעות קובץ נפרד בעת הסיומת _vue._
זו הצורה שבה אנו נשתמש להגדרת קומפוננטות בפרוייקט שלנו.

כל קובץ המייצג קומפוננטה יהיה בנוי בצורה הבאה:

<div id="import" dir="ltr" style="padding-left:15%;">

<b>ButtonCounter.vue:</b>

```html
<template>
  <!-- inside the template tag, there should be one element as a root -->
  <div>
    <!-- ... -->
  </div>
</template>

<script>
  // exporting our component
  export default {
    name: "ButtonCounter" // The name of the component
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* ... */
</style>
```

</div>

<i>

> טיפים לכתיבה נכונה:
>
> - את השם של הקומפוננטה נרשום PascalCase - כל מילה מתחילה באות גדולה
>   אחת הסיבות היא להיוודל מאלמנטים בסייסיים של HTML שכולם באותיות קטנות
> - השם של הקובץ שבו שמורה קומפוננטה יהיה זהה לשם של הקומפוננטה
> - אם נרשום כמה קומפוננטות שקשורות אחת לשניה ננסה לדאוג שprefix יהיה דומה

</i>

**[קישור לדוגמאת הקוד](src/components/ButtonCounter.vue)**

> _**טיפ:** באמצעות הextension Vetur נוכל לרשום בקובץ vue את המילה vbase וככה ליצור את הבסיס של הקובץ בצורה מהירה._

&nbsp;

## כיצד נוכל להשתמש בקומפוננטה לאחר שהגדרנו אותה?

את הקומפוננטה שהגדרנו בקובץ נפרד נייבא באמצעות **import**. הייבוא מתאפשר בזכות ההגדרות שvue-cli הגדיר לנו כאשר פתחנו את הפרויקט.

לאחר שייבאנו את הקומפוננטה, נצהיר שאנחנו משתמשים בה באמצעות השימוש בproperty מסוג component של האובייקט שמשתמש בקומפוננטה.

כאשר אנחנו משתמשים בקומפוננטה מתוך אובייקט Vue נוכל לאמר מבחינה היררכית שאותה קומפוננטה היא **child** של אותו אובייקט (Child Component), והאובייקט ייקרא אובייקט אב.

> מאחורי הקלעים מתבצע שימוש בספריית `vue-loader`, (שהתקנו דרך השימוש ב `Vue-cli`), שמאפשר לנו את ייבוא הקמפוננטות בדרך זו.
>
בכל פרויקט Vue תופיע לנו הקומפוננטה הראשית שלרוב תהיה מוגדרת בקובץ **App.vue:**

<div id="import" dir="ltr" style="padding-left:15%;">

```html
<template>
  <div id="app">
    <ButtonCounter/>
  </div>
</template>

<script>
  // import component from the components directory
  import ButtonCounter from "./components/ButtonCounter";

  export default {
    name: "App",
    components: {
      ButtonCounter
    }
  };
</script>

<style></style>
```

</div>

**[קישור לדוגמאת הקוד](src/App_example.vue)**

ניתן לראות בדוגמא זו שימוש בקומפוננטה מתוך קומפוננטה אחרת.

> כפי שדיברנו בעבר, אפליקציית Vue היא למעשה עץ היררכי של קומפוננטות כך שקיים אובייקט Vue שהוא הroot של העץ.

&nbsp;

## סוגים של קומפוננטות

ניתן לחלק את הקומפוננטות שאיתן נעבוד לשני סוגים: 

1. **קומפוננטות שהתוכן שלהן הוא עמוד** (כמו עמוד ראשי או עמוד הרשמה)

   - בקומפוננטות אלה בדרך כלל נשתמש **פעם אחת**.

   - הקומפונטות האלה בדרך כלל יכילו הרבה תוכן ולוגיקה, לכן יכילו קומפוננטות אחרות שיהוו רכיבים של העמוד.

   - את קומפוננטות אלה נשמור בתוך תיקייה בשם **pages**.

2. **קומפוננטות שהתוכן שלהם הוא רכיב של עמוד** (כמו קומפוננטת תצוגה מקדימה)

   - בקומפוננטות אלה בדרך כלל נשתמש **יותר מפעם אחת** (לא תמיד).

   - קומפוננטות מהסוג הזה, אשר נרצה לעשות בהם שימוש חוזר לאורך כל האפליקציה בקומפוננטות שונות (למשל קומפוננטה של כפתור מעוצב או הקומפוננטה של תצוגה מקדימה) **יכולות להיות מוגדרות כקומפוננטות גלובליות**, כך שאין צורך כל מסמך לייבא אותן בכל קובץ מחדש אלא רק פעם אחת בקובץ הבסיסי. 

   - את הקומפוננטות האלה נשמור בתוך תיקייה בשם **components**.

&nbsp;

<!--
1. החלוקה השניה תיהיה בין:

- **קומפוננטות גלובאליות:** בהן נרצה לעשות שימוש חוזר לאורך כל האפליקציה - בעמודים שונים - לדוגמא: תצוגה מקדימה של מתכון
- **:קומפוננטות לוקאליות** בהן נעשה שימוש, בתוך קומפוננטת אב כלשהי - כאשר אנו כותבים כמו עם לוגיקה מורכבת, אנו רוצים להפריד אותו לרכיבים/קומפוננטות, כך כל רכיב ישב בקומפוננטה ובקובץ משלו. בצורה זו אנו מחלקים את הקוד לרכיבים לוגיים ו ומאפשרים תחזוקה והבנה קלה של הקוד (מודולים) -->

## <span id="task1" style="color:green;"> <-- משימה 1 --> </span>

<b>

המשימה הראשונה שלכם היא ליצור שתי קומפוננטות:

1. קומפוננטה של תצוגה מקדימה בקובץ [GamePreview.vue](src/components/GamePreview.vue) - שכרגע תכיל את הטקסט "game preview".

2. קומפוננטה של עמוד ראשי בקובץ [FavoriteGames.vue](src/components/FavoriteGames.vue) -
   שתשמש כקומפוננטה שמרכזת את כל המשחקים המועדפים של המשתמש.

3. קומפוננטה של עמוד ראשי בקובץ [MainPage.vue](src/pages/MainPage.vue) - שתשתמש בקומפוננטה של העמוד הראשי.

4. לייבא את הקומפוננטה [MainPage.vue](src/pages/MainPage.vue) בקובץ [App_task.vue](src/App_task.vue)

5. לייבא את הקומפוננטות אחת לשניה לפי ההיררכיה המבוקשת

_קישור למשימה [1](#task1) [2](#task2) [3](#task3) [4](#task4) [5](#task5)_

</b>

&nbsp;

## **_props של קומפוננטה_**

נשתמש בprops כאשר נרצה להעביר מידע ל Child-Component.
לצורך העברת המידע נצטרך לממש שני חלקים:

1. בהגדרת הקומפוננטה - נוסיף שדה בשם _props_ (קיצור לproperties).

   **שדה זה הינו אובייקט, אשר בתוכו נגדיר את כל השדות שאנחנו רוצים לקבל מקופוננטת האב.**

   **אותם שדות יהיו לנו חלק מהשדות של הקומפוננטה כמו השדות של data.**

<div dir="ltr" style="padding-left:15%;">

inside Child Component logic:

```javascript
export default {
  name: "MessageLine",
  props: {
    message: {
      type: String,
      required: true
    }
  }
};
```

</div>
עבור כל פרמטר יש לציין:

- שם התכונה
- הסוג
- האם הוא הכרחי

  - אם הוא לא הכרחי, יש לציין פונקציה שמחזירה את הערך הדיפולטי שלו

<div dir="ltr" style="padding-left:15%;">
  
  ```javascript
  timestamp: {
    type: Number,
    required: false,
    default: () => undefined
  }
  ```

  </div>

2) בtemplate של קומפוננטת האב, בתוך תגית הקומפוננטה בה אנו עושים שימוש, נספק ערך עבור כל אחד מהpropsL 

<div dir="ltr" style="padding-left:10%;">

```html
<MessageLine message="hello everyone!!!" />
```
</div>

**_שימו לב - במידה וברצנוכם להעביר כמות גדולה של שדות, כדאי לשקול שליחה של אובייקט במקום שדות נפרדים (אובייקט הוא משתנה מסוג Object)._**

[דוגמאת קוד](src/components/MessageLine.vue)

[עוד על props](https://vuejs.org/v2/guide/components-props.html)

&nbsp;

## <span id="task2" style="color:green;"> <-- משימה 2 --> </span>

<b>

במשימה זו נגדיר בקובץ [GamePreview.vue](src/components/GamePreview.vue) עבור הקומפוננטה של תצוגה מקדימה למשחק את כל הפרמטרים שאנחנו מצפים לקבל, שהם:

<div dir="ltr" style="padding-left:15%;">

- id : type = number , required
- hostTeam : type = String , required
- guestTeam : type = String, required
- date : type = String, required
- hour : type = String, required

</div>

בנוסף יש:

- ליצור תצוגה של המידע ב[GamePreview.vue](src/components/GamePreview.vue) מprops באיזה דרך שתבחרו (ב-template)
- להעביר בשימוש של הקופוננטה ב [FavoriteGames.vue](src/components/FavoriteGames.vue) ערכים מסוימים (רק לבינתיים)

<i>

טיפים והערות:

- לצורך ההתנסות, במעבדה תרשמו את כל השדות בנפרד.
- בעבודה תצטרכו גם להתייחס למידע ספציפי למשתמש כמו האם המשחק כבר התקיים. 

</i>

_קישור למשימה [1](#task1) [2](#task2) [3](#task3) [4](#task4) [5](#task5)_

</b>

&nbsp;

## **_v-bind_**

מאפשר לנו ליצור one-way binding בין expression ל attribute.

<div dir="ltr" style="padding-left:15%;">

Inside template:

```html
<button v-bind:disabled="!message.length">
  Add new message
</button>
```

Inside Vue object:

```javascript
data(){
  return {
    message: ""
  };
}
```

</div>



צורת הכתיבה תיהיה:

<div dir="ltr" style="padding-left:15%;">

```
v-bind:AttributeName="expression"
```

</div>

בצורה מקוצרת במקום לרשום **:v-bind** , נרשום **:**

<div dir="ltr" style="padding-left:15%;">

```html
<button :disabled="flag">Click me!</button>
```

</div>

**[קישור לדוגמאת הקוד](src/components/DisableButton.vue)**

> _**תזכורת:** כאשר דיברנו בסוף המעבדה הקודמת על v-for, דיברנו שיש אפשרות להצמיד לelement באיטרציה property בשם key שייחד אותו משאר האלמנטים.\
> הkey בעצם binded לפרמטר של המשתנה שעליו אנחנו עוברים ולכן נרשום אותו בצורה הבאה:_

<div dir="ltr" style="padding-left:15%;">

```html
<div v-for="m in messages" :key="m.time">
  {{ message }}
</div>
```

</div>

[עוד על v-bind](https://vuejs.org/v2/api/#v-bind)

&nbsp;

## <span id="task3" style="color:green;"> <-- משימה 3 --> </span>

<b>

כעת עם מה שלמדנו נוכל לעבור על רשימת המשחקים וליצור קומפוננטה עבור כל אחד מהם. 

לשם כך אתם צריכים:

1. רשימת משחקים בקומפוננטת המועדפים  שלנו - [FavoriteGames.vue](src/components/FavoriteGames.vue) (נתחיל מרשימה שאנחנו ניצור ידנית)

<div dir="ltr" style="padding-left:15%;">

```javascript
games: [
  {
    id:25,
    hostTeam: "Maccabi Tel-Aviv",
    guestTeam: "Hapoel Beer-Sheva",
    date: "27/5/21",
    hour: "20:00"
  },
  {
    id:39,
    hostTeam: "Hapoel Tel-Aviv",
    guestTeam: "Maccabi Haifa",
    date: "29/5/21",
    hour: "20:00"
  }
];
```

</div>

2. בקובץ [FavoriteGames.vue](src/components/FavoriteGames.vue) להוסיף את הdirective שלמדנו במעבדה קודמת v-for לאלמנט של הקומפוננט על מנת ליצור את קומפוננטת התצוגה המקדימה עבור כל מתכון ברשימה.

> #הערה: כאשר אתם עושים v-for לקומפוננטה, אתם חייבים לציין key
> (במקרה הזה id)

_קישור למשימה [1](#task1) [2](#task2) [3](#task3) [4](#task4) [5](#task5)_

</b>

&nbsp;

## **mounted (and) beforeDestroy**

<div dir="ltr" style="padding-left:15%;">

```javascript
export default {
  name: "ComponentName",
  mounted() {
    console.log("mounted");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  }
};
```

</div>

במחזור החיים של אובייקט Vue, ישנם שני eventים שמעניינים אותנו:

> - **mounted:** מסמל את הרגע בו האובייקט נוצר ונקשר לtemplate
>   &#09;  
>   **<span style="color:green;">מתי נשתמש --> שליחת בקשה לשרת והשמת התוצאה למשתנה של האובייקט ברגע התגובה</span>**

> - **beforeDestroy:** מסמל את הרגע לפני שהאובייקט נהרס ומאפשר לנו להריץ קוד
>   &#09;  
>   **<span style="color:green;">מתי נשתמש --> ניקוי נתונים שאנחנו לא צריכים מהזיכרון</span>**

[link to life cycle image](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram)

&nbsp;

## <span id="task4" style="color:green;"> <-- משימה 4 --> </span>

<b>

כעת עליכם להוסיף לקובץ [MainPage.vue](src/pages/MainPage.vue) את הפונקציה mounted שתכיל קריאה לconsole.log עם הערה לבחירתכם.

כעת הוסיפו את אותה הפונקציה גם לקובץ [GamePreview.vue](src/components/GamePreview.vue), כמה פעמים תיקרא הפונקציה?

_קישור למשימה [1](#task1) [2](#task2) [3](#task3) [4](#task4) [5](#task5)_

</b>

&nbsp;

## **_axios_**

axios היא ספרייה שהשתמשנו בה בצד השרת כדי ליצור בקשות לapi החיצוני.

במעבדה הקודמת ראינו איך ניתן לייבא את axios במצעות התגית
<div dir="ltr" style="padding-left:15%;">

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

</div>
כעת, כאשר אנחנו עובדים על פרוייקט vue שפתחנו באמצעות vue-cli, נוכל לייבא את axios 
באמצעות שלוש שורות קוד שייכתבו בקובץ main: 
<div dir="ltr" style="padding-left:15%;">

```javascript
import VueAxios from "vue-axios";
import axios from "axios";

Vue.use(VueAxios, axios);
```
</div>
כעת בצד הלקוח נשתמש בaxios על מנת לפנות לשרת שיצרנו בעבודה 3.2 וליצור בקשות כמו קבלת מידע על משחקים או התחברות והרשמה.

נפעיל בקשות axios באמצעות המצביע this. 

הבקשה דרך axios תראה כך:

<div dir="ltr" style="padding-left:5%;">

```javascript
  async updateGames(){
      console.log("response");
      try {
        const response = await this.axios.get(
          "http://localhost:3000/games/favoriteGames",
        );
        const games = response.data.games;
        this.games = [];
        this.games.push(...games);
        console.log(response);
      } catch (error) {
        console.log("error in update games")
        console.log(error);
      }
    }
  }, 
  mounted(){
    console.log("favorite games mounted");
    this.updateGames(); 
  }
```

</div>


&nbsp;

## <span id="task5" style="color:green;"> <-- משימה 5 --> </span>

<b>

המשימה שלכם כעת היא להחליף את המשחקים שהגדרנו ממקודם למשחקים מועדפים שנקבל מהשרת. 

הפעולות הנדרשות: 

- ליצור פונקציה אסינכרונית בשם updateGames שיוצרת בקשה באמצעות axios וכאשר התגובה חוזרת, במידה ולא הייתה שגיאה, תעדכן את השדה games למשחקים החדשים.
- בפונקציה mounted לקרוא לפונקציה updateGames.

_בעבודה 3.3 אתם תפנו לשרת שיצרתם בעבודה 3.2, אך כעת נפנה לspooncular ישירות (מה שלא יקרה ב3.3)._

_קישור למשימה [1](#task1) [2](#task2) [3](#task3) [4](#task4) [5](#task5)_

</b>

&nbsp;

<!-- ## **_עמוד ראשי - הצגת תצוגות מקדימות של מתכונים רנדומליים_**

אחר כל איך ליצור עמוד שמשתמש בv-for (כמעט רשמתי ng-for) כדי ליצור שכפול של הקומפוננטה שיצרנו עד עכשיו אחרי שקיבלנו את המידע מaxios שאני אבנה להם את הבקשה בשרת שלי עבורה או שישתמשו בשלהם

</div> -->
