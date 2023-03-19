## Getting Started

First, run the development server:

```
npm install
npm run dev
```

### image

https://unsplash.com/s/photos/programing

### icons

https://heroicons.com/

https://github.com/mschwarzmueller/nextjs-course-code/tree/03-prj-routing-extra-files/components

### Google font

globals.css

### build to netlify

netlify.toml at root folder

```
[build]
   command = "npm run build && npm run export"
   publish = "out"

```

package.json at root folder

```
"scripts": {
   "export": "next export"
},
```

Build settings for the netlify project;

Build command:

```
npm run build && npm run export
```

Publish directory: out

### [Netlify](https://nextjsmax-filebaserouting.netlify.app/)
