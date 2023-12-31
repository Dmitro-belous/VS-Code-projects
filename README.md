# [Webpack-dev-server + minimizers, linters, husky](http://localhost:8090/)
## [Skillfactory](https://skillfactory.ru) FPW homework

Webpack, JS + CSS import, HtmlWebpackPlugin, CssMinimizerPlugin, ESLint, Stylelint, Webpack-dev-server with inline-source-map and Hot Module Replacement, Production-mode, Json-server, Husky.
<hr>
<p> </p>

### Техническое задание  

1. Установить и настроить webpack-dev-server.
2. Настроить hot module replacement.
3. Сделать возможность запуска на разных окружениях (dev, prod) c разной конфигурацией (например, убрать HMR на проде).
4. Настроить JSON-server и отображать полученные с него данные.
5. Добавить запуск линтера при комите.
<br>

### Quick start


```bash
npm i
```

development-mode: webpack.config.js
```bash
npm run start-dev
```

production-mode: webpack.prod.js
```bash
npm run start-prod
```  

JSON-server
```bash
json-server --watch database.json
```

commit with ESLint check and fix
```bash
git commit -a -m "commit_message"
```

Page opens at url http://localhost:8090/

<br>

:arrow_up: [to begin](README.md##Skillfactory)

<br><br>
Star ⭐️⭐️⭐️⭐️️⭐️ my project if you like it or think it is useful
