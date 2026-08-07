# Service Performance Dashboard

This version is prepared for GitHub Pages.

## Uploading

Upload the **contents of this folder** to the root of your GitHub repository.

The repository root should contain:

- `index.html`
- `.nojekyll`
- `css`
- `js`
- `dashboards`
- `data`

Do not upload the outer `service-dashboard-github` folder as an extra nested level unless GitHub Pages is configured for that folder.

## Enable GitHub Pages

1. Open the repository in GitHub.
2. Go to **Settings**.
3. Select **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save.

The site will load from the repository's GitHub Pages address.

The data is embedded into the HTML pages so the dashboard works reliably on GitHub Pages. JSON files are retained as editable source files, but changing them alone will not update the HTML until the corresponding embedded page data is regenerated.

## Filling in daily/monthly figures

The dashboard reads two uploaded Excel files, both selected from the header controls — nothing is committed to this repo:

- **Service workbook** — day-to-day advisor, technician, CitNOW, CRS, returns and service plan activity. Use `workbook-template/Service-Tracker-Template.xlsx` as the starting point; its `Read Me` tab explains which two tabs (Advisor Daily, Technician Daily) need daily entries and how everything else rolls up automatically.
- **End of Day** — Service GP and Parts GP plan vs. actual, one sheet per month. Unchanged from before.

The service workbook's `Monthly Rollup` tab is what the dashboard actually parses (by column header, not fixed cell positions), so reordering or adding columns to the daily-entry tabs is safe as long as the header text on `Monthly Rollup` stays the same.
