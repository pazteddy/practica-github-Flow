# Instrucciones

### **Objetivo:**
Practicar el proceso de creación, revisión y fusión de Pull Requests (PRs) en GitHub, trabajando en equipos de 2 o 3 personas. Cada equipo creará **dos ramas**, cada una con una nueva funcionalidad, y realizará PRs para ambas.

### Duración 30 minutos
---

### **1. Repositorio Base**
[Repositorio](https://github.com/pazteddy/practica-github-Flow)
- En el repositorio de GitHub encontrarás lo siguiente un archivo `index.js` con la siguiente estructura inicial:

```javascript
// index.js
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("World"));
```

---

### **Objetivos**

#### **Paso 1: Crear dos ramas **
1. En tu equipo, selecciona **dos tareas o mejoras** para el proyecto. Cada tarea se implementará en una rama diferente.
   - **Ejemplo de tarea 1:** Modificar la función `greet` para soportar múltiples idiomas.
   - **Ejemplo de tarea 2:** Agregar una nueva función `farewell(name)` para despedidas.

2. Crea una **nueva rama** para cada tarea:

   - **Crear la primera rama (para la tarea 1):**
     ```bash
     git checkout -b nombre-de-la-rama1
     ```

   - **Crear la segunda rama (para la tarea 2):**
     ```bash
     git checkout -b nombre-de-la-rama2
     ```

#### **Paso 2: Realizar los cambios en cada rama**
1. **En la rama 1:**
   - Modifica la función `greet` para que soporte múltiples idiomas.
   
   **Ejemplo de cambio:**
   ```javascript
   function greet(name, language = "en") {
       if (language === "es") {
           return `¡Hola, ${name}!`;
       } else if (language === "fr") {
           return `Bonjour, ${name}!`;
       }
       return `Hello, ${name}!`;
   }

   console.log(greet("World", "es"));
   ```

2. **En la rama 2:**
   - Agrega una nueva función llamada `farewell` para despedir al usuario.

   **Ejemplo de cambio:**
   ```javascript
   function farewell(name) {
       return `Goodbye, ${name}!`;
   }

   console.log(farewell("World"));
   ```

#### **Paso 3: Hacer commit de los cambios en cada rama**
1. **En la rama 1 (función `greet`):**
   - Añade el archivo modificado a Git:
     ```bash
     git add index.js
     ```
   - Realiza el commit con un mensaje claro:
     ```bash
     git commit -m "Modificado greet para soportar múltiples idiomas"
     ```

2. **En la rama 2 (función `farewell`):**
   - Añade el archivo modificado a Git:
     ```bash
     git add index.js
     ```
   - Realiza el commit con un mensaje claro:
     ```bash
     git commit -m "Agregada función farewell para despedidas"
     ```

#### **Paso 4: Subir las ramas a GitHub**
1. **Sube la primera rama** al repositorio remoto:
   ```bash
   git push origin nombre-de-la-rama1
   ```

2. **Sube la segunda rama** al repositorio remoto:
   ```bash
   git push origin nombre-de-la-rama2
   ```

#### **Paso 5: Crear Pull Requests para ambas ramas**
1. Dirígete al repositorio en GitHub.
2. Crea un PR para la primera rama (`nombre-de-la-rama1`) con una descripción clara. Ejemplo:
   ```
   Este PR modifica la función greet para soportar múltiples idiomas. Ahora se puede saludar en español y francés.
   ```
3. Crea otro PR para la segunda rama (`nombre-de-la-rama2`). Ejemplo:
   ```
   Este PR agrega la función farewell para despedir al usuario.
   ```

#### **Paso 6: Fusión de los PRs**
1. Una vez que ambos PRs han sido aprobados, fusiona las ramas a `main`:
   ```bash
   git checkout main
   git pull origin main
   git merge nombre-de-la-rama1
   git merge nombre-de-la-rama2
   ```

2. Actualiza tu repositorio local para reflejar los cambios:
   ```bash
   git pull origin main
   ```
