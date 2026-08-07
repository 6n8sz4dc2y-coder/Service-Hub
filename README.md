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

The dashboard reads three uploaded Excel files, all selected from the header controls — nothing is committed to this repo:

- **Service workbook** — day-to-day advisor, technician, CitNOW, CRS, returns and service plan activity. Use `workbook-template/Service-Tracker-Template.xlsx` as the starting point; its `Read Me` tab explains which two tabs (Advisor Daily, Technician Daily) need daily entries and how everything else rolls up automatically. Tyres are logged as a count (e.g. 4 possible, 2 sold on one visit) rather than a Y/N flag, since a single vehicle can take more than one.
- **End of Day** — Service GP and Parts GP plan vs. actual, one sheet per month, sheet names like `JULY 2026`.
- **Parts workbook** — trade parts performance, service kit/wiper/hybrid filter/fuel treatment sales, one sheet per month named `July 2026` etc. Read the Sold/Target columns on each metric's row; the dashboard looks up rows by label text so reordering rows is safe, but don't rename the metric labels (`Service Kits`, `Hybrid Battery Filters`, `Fuel Treatments`, `Wipers`, `Trade — Month`) or the "Sold"/"Target" column headers.

The service workbook's `Monthly Rollup` tab is what the dashboard actually parses (by column header, not fixed cell positions), so reordering or adding columns to the daily-entry tabs is safe as long as the header text on `Monthly Rollup` stays the same. The End of Day and Parts workbooks are matched by row label text for the same reason — both are pre-existing templates outside this repo, so the dashboard adapts to their layout rather than the other way round.
