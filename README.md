# [OogHub](https://ooghub.vercel.app/)

This application is insipred by the wisdom of Master Oogway and attempts to portray even a fraction of his wisdom by providing an easy and user-friendly platform to see random quotes on demand. 
It also offers the functionality to save quotes and to get more information about the authors of the quotes. 

OogHub is built with React, two APIs and two external libraries.

- [Quotable](https://github.com/lukePeavey/quotable)
- [Wikipedia](https://en.wikipedia.org/api/rest_v1/)
- [Framer-Motion](https://github.com/framer/motion)
- [Chakra UI](https://github.com/chakra-ui/chakra-ui/)

## Run Application
To run this application Node.js and pnpm is required

### To install pnpm using npm
```
$ npm install -g pnpm
```
If you do not have npm the full installation guide can be found [here](https://pnpm.io/installation) 


### Run Application using pnpm

From the client folder of this application run the following:

To install the dependencies:

```
$ pnpm install
```

To run the applicaiton:
```
$ pnpm run dev
```

## Why React was chosen over the other frameworks

### Why React? 
React uses JSX-based templates while Vue and Angular use HTML. Therefore, we chose to use React because JSX-based templates allow us to use expressions and functions within the syntax. An example of the convenience of this is that you can map HTML elements directly in the syntax.

Additionally, React is one of the most used frameworks in the industry today. We want to learn more about its functionality to understand why it has become as popular as it is today [1]. React also allows us more freedom to choose tools and libraries.

Moreover, React is more scalable, which is good for future projects when building something larger. Therefore, we decided to build this in React to gain more practice with it.

### React over Vue
One of the reasons React was chosen over Vue is because React has a larger active open-source community, which means there are more external libraries available for use. This is because React is the oldest among these technologies, allowing more libraries to emerge over time for React. Additionally, React has the advantage of being supported by Meta (Facebook)[2]. These external libraries are beneficial for us to quickly develop a good and user friendly application without the need to reinvent the wheel.

Moreover, as mentioned earlier, Vue is based on HTML templates [2] while React is based on JSX, which is prefered by the project memebers. React also provides the freedom to install any components you want, unlike Vue, which is more restrictive and suggests specific components for creating application features [3]. Therefore, experienced developers typically use React for its flexibility, while beginner developers often use Vue for its accessibility and ease of starting to program with, as React requires more insight into JavaScript[3].

### React over Angluar
One of the main reasons we chose React over Angular was because Angular is a structured framework that takes much longer to learn, while React is a JavaScript library [4].

When it comes to the structure of the different technologies, both Angular and React are component-based, but the difference lies in how the environment is structured [4]. Angular has a very specific MVC structure in its environment from the beginning [4], which can be suitable for large companies as it ensures consistency. React, on the other hand, is much more flexible and allows developers to decide on the structure themselves [4], which suited us for this project since it wasn't a large one.

Both technologies support server-side rendering and client-side rendering [4]. However, the difference here is that Angular uses the traditional DOM, while React also uses a virtual DOM [4]. The reason why using only the regular DOM can be negative is that it is resource-intensive to update [5]. The virtual DOM helps the real DOM by identifying which elements actually need to be updated, making the DOM updates more efficient [5]. Some advantages of this concept are that the website becomes faster, has better performance, and overall provides a smoother user experience [5].

In the end, React was considered more advantageous for us because it is a smaller project where the simplicity and flexibility of React outweighed the characteristics of Angular.

### Sources
- [1] L. S. Vailshery, "Most used web frameworks among developers 2023," Statista, 2024. [Online]. Available: (https://www.statista.com/statistics/1124699/worldwide-developer-survey-most-used-frameworks-web/) (Accessed: 2024-05-20).
- [2] Programming with Shahan, "React or Vue, which JS framework is best?," DEV Community, Mar. 2, 2024. [Online]. Available: (https://dev.to/codewithshahan/react-or-vue-which-js-framework-is-best-25on) (Accessed: 2024-05-20).
- [3] N. Raval, "React vs Vue: Comparison of the Best JavaScript Frameworks at a Glance!" RADIX, [Online], Dec. 18, 2023. Available: (https://radixweb.com/blog/react-vs-vue) (Accessed: 2024-05-20).
- [4] N. Raval, "React vs Angular: Which JS Framework to choose for Front-end Development?," RADIX, [Online], Apr. 1, 2024. Available: (https://radixweb.com/blog/react-vs-angular#ARDifference) (Accessed: 2024-05-20).
- [5] H. Petkovski, "DOM vs. Virtual DOM – Understanding the Differences," KEITARO, [Online], Jul. 12, 2023. Available: (https://www.keitaro.com/insights/2023/07/12/dom-vs-virtual-dom-understanding-the-differences/) (Accessed: 2024-05-20).
