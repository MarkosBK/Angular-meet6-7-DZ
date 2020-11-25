import { Summary } from "./summary";
let skills1:string[] = [];
let skills2:string[] = [];
let skills3:string[] = [];
skills1.push("C#");
skills1.push("TypeScript");
skills2.push("ASP.NET");
skills2.push("ASP.NET Core");
skills3.push("HTML/CSS/JS");

let links1:Map<string,string> = new Map<string,string>();
let links2:Map<string,string> = new Map<string,string>();;
let links3:Map<string,string> = new Map<string,string>();;

links1.set("Facebook","https://www.facebook.com/profile.php?id=100014282527366");
links2.set("Facebook","https://www.facebook.com/profile.php?id=100014282527366");
links3.set("Facebook","https://www.facebook.com/profile.php?id=100014282527366");

links1.set("LinkedIn","https://www.linkedin.com/in/markos-basilio-0ba606194/");
links2.set("LinkedIn","https://www.linkedin.com/in/markos-basilio-0ba606194/");
links3.set("LinkedIn","https://www.linkedin.com/in/markos-basilio-0ba606194/");

export const SummariesOBJ:Summary[]=
[
    {
        Name: "Markos1",
        PhoneNumber:"PhoneNumber1",
        Email: "markosbasilio17@gmail.com1",
        City: "Кривой Рог1",
        WorkExpYears: 1.5,
        Skills: skills1,
        Photo: "../assets/index.jpg",
        Links: links1
    },

    {
        Name: "Markos2",
        PhoneNumber:"PhoneNumber2",
        Email: "markosbasilio17@gmail.com2",
        City: "Кривой Рог2",
        WorkExpYears: 1.5,
        Skills: skills2,
        Photo: "../assets/index.jpg",
        Links: links2
    },
    
    {
        Name: "Markos3",
        PhoneNumber:"PhoneNumber3",
        Email: "markosbasilio17@gmail.com3",
        City: "Кривой Рог3",
        WorkExpYears: 1.5,
        Skills: skills3,
        Photo: "../assets/index.jpg",
        Links: links3
    }
]