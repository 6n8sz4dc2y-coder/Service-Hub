SERVICE DASHBOARD ROOT

Open index.html in a browser.

Folder structure:
- index.html: main dashboard index
- css/style.css: all shared styling
- js/app.js: reusable dashboard functions
- dashboards/: individual dashboard pages
- data/: JSON data feeding each page

To update a page:
1. Open the matching JSON file in the data folder.
2. Change the KPI or table values.
3. Save the file.
4. Refresh the browser.

Note:
Some browsers block local JSON loading when opening files directly.
For full functionality, run this folder through a simple local web server.
For example:
python -m http.server 8000

Then open:
http://localhost:8000
