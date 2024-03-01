# React🚀




### Installing Node.js

- Check if Node.js is installed on your system:

    ```
    node -v
    ```

    If you get an error like "command not found," it means Node.js is not installed. 

- Install Node.js:

    ```
    sudo apt-get install nodejs
    ```

    Verify the installation:

    ```
    node -v
    npm -v
    ```

- To upgrade to a newer version:

    ```
    sudo npm install -g n
    sudo n lts
    ```

    Reopen the terminal and check the version again:

    ```
    node -v
    ```


    ### npm in our project folder

- Run `npm init` to initialize a new npm package. You will be prompted to provide details such as description, entry point, test command (Jest is used for testing), keywords, author, and license (ISC).

    ```
    npm init
    ```

    This will generate a `package.json` file in your project directory.
  
  ### Install Dependencies (Bundlers)

- We use Parcel for bundling. Install Parcel as a devDependency:

    ```
    npm install -D parcel
    ```

    The `-D` flag is used for devDependencies.

    This will generate a `package-lock.json` file and a `node_modules` directory in your project directory.

- If you delete `node_modules`, you can recreate it using:

    ```
    npm install
    ```

    This will install all dependencies listed in `package.json`.

  ### Executing the Packages

- **Development Build:**

    ```
    npx parcel index.html
    ```

    This will generate a `.parcel-cache` directory and a `dist` directory in your project directory.

- **Production Build:**

    ```
    npx parcel build index.html
    ```

    This will generate a `.parcel-cache` directory and a `dist` directory in your project directory. The `dist` directory will contain optimized and minified files suitable for production use.

  ### Installing React and ReactDOM

- Install React and ReactDOM:

    ```
    npm install react react-dom
    ```

    This will add React and ReactDOM as dependencies to your `package.json` file.

### Importing/Using React and ReactDOM in Your Project

- Import React and ReactDOM into your project:

    ```javascript
    import React from "react"
    import ReactDOM from "react-dom"
    ```

    Make sure to use `type=module` in the script tag for understanding that it's a module.

  ### browserslist for Browser Support

- Add a `browserslist` field to your `package.json` file to specify the browsers you want to target. For example:

    ```json
    "browserslist": [
        "last 2 versions"
    ]
    ```

    This will target the last 2 versions of major browsers.


## parcel📦

#### Features:

- **Zero Configuration:** No setup required, just start coding.
- **Development Build:** Built-in development server for local development.
- **Hot Module Replacement (HMR):** Automatically refreshes the page.
- **File Watching Algorithm:** Written in C++ for efficient file monitoring.
- **Caching:** Faster builds and improved performance.
- **Image Optimization:** Optimizes images for production.
- **Minification:** Removes unnecessary characters from code.
- **Bundling:** Combines code and assets into a single file.
- **File Compression:** Compresses files for smaller file sizes.
- **Consistent Hashing:** Ensures file integrity and caching efficiency.
- **Code Splitting:** Breaks code into smaller bundles for optimized loading.
- **Differential Bundling:** Creates separate bundles for different browsers or environments.
- **Diagnostic & Error Handling:** Detailed error messages and diagnostic tools.
- **HTTPS Support:** Enables secure serving of your application over HTTPS.
- **Tree Shaking:** Removes unused code to reduce bundle size and improve performance.
