
const getAuroUseData = () => {
  // To be replaced with a call to the web service at some point
  return rawData;
}

const getTableHeaders = () => {
  return ["FileName","Component","Version"];
}

const generateFileTableData = (fileName, lines) => {
  const table = []
  lines.forEach(line => {
    const lineData = line.split(":");
    if (lineData[1].match(/\d+\.\d+\.*\d*/g)) {
      table.push({
        FileName: fileName,
        Component: lineData[0],
        Version: lineData[1]
      })
    }
  });
  return table;
}

const rawData = {
  "Projects": [
      {
          "Name": "E_Serve_Fly",
          "Repositories": [
              {
                  "Name": "ryoko-site",
                  "Files": [
                      {
                          "Name": "/package.json",
                          "Lines": [
                              "icons:^3.1.1",
                              "ods-button:^4.4.5",
                              "ods-hyperlink:^1.4.6",
                              "ods-inputtext:^1.0.8",
                              "orion-design-tokens:^2.10.15",
                              "orion-icons:^2.1.5",
                              "orion-web-core-style-sheets:^2.9.2",
                              "*:<rootDir>src/Mocks/FileMock.ts"
                          ]
                      }
                  ]
              }
          ]
      },
      {
          "Name": "LCC",
          "Repositories": [
              {
                  "Name": "Web-RetroCredit",
                  "Files": [
                      {
                          "Name": "/package.json",
                          "Lines": [
                              "ods-button:^4.2.0",
                              "ods-hyperlink:^1.4.3",
                              "ods-inputoptions:^1.1.7",
                              "orion-design-tokens:^2.10.0",
                              "orion-icons:^2.0.0",
                              "orion-web-core-style-sheets:^2.7.1"
                          ]
                      }
                  ]
              }
          ]
      },
      {
          "Name": "E_Serve_Manage",
          "Repositories": [
              {
                  "Name": "DisruptionsCenterSite",
                  "Files": [
                      {
                          "Name": "/package.json",
                          "Lines": [
                              "icons:^3.1.1",
                              "ods-button:^4.4.7",
                              "orion-design-tokens:^2.11.0",
                              "orion-web-core-style-sheets:^2.9.5"
                          ]
                      }
                  ]
              }
          ]
      },
      {
          "Name": "E_Sell_PathtoPurchase",
          "Repositories": [
              {
                  "Name": "ComponentLibrary",
                  "Files": [
                      {
                          "Name": "/package.json",
                          "Lines": [
                              "ods-button:^4.4.7",
                              "ods-hyperlink:^1.4.7",
                              "orion-design-tokens:^2.11.0",
                              "orion-icons:^2.1.5",
                              "orion-web-core-style-sheets:^2.9.4"
                          ]
                      }
                  ]
              }
          ]
      },
      {
          "Name": "E_Retain_Account",
          "Repositories": [
              {
                  "Name": "Web-PreferenceCenter",
                  "Files": [
                      {
                          "Name": "/preference-center/package.json",
                          "Lines": [
                              "ods-button:^4.3.1",
                              "ods-hyperlink:^1.4.3",
                              "ods-inputoptions:^1.1.7",
                              "orion-design-tokens:^2.10.9",
                              "orion-icons:^2.1.1",
                              "orion-web-core-style-sheets:^2.8.11"
                          ]
                      }
                  ]
              }
          ]
      },
      {
          "Name": "E_Retain_Content",
          "Repositories": [
              {
                  "Name": "HackerGames-HomepageFlights",
                  "Files": [
                      {
                          "Name": "/package.json",
                          "Lines": [
                              "ods-button:^2.7.4",
                              "ods-hyperlink:^1.0.7",
                              "ods-inputoptions:^1.1.4",
                              "orion-design-tokens:^2.7.1",
                              "orion-icons:^1.6.3",
                              "orion-web-core-style-sheets:^2.6.9"
                          ]
                      }
                  ]
              },
              {
                  "Name": "Pkg-AuroConsumables",
                  "Files": [
                      {
                          "Name": "/package.json",
                          "Lines": [
                              "ods-button:^4.3.1",
                              "ods-hyperlink:^1.4.3",
                              "orion-design-tokens:^2.10.9",
                              "orion-icons:^2.1.2",
                              "orion-web-core-style-sheets:^2.8.12"
                          ]
                      }
                  ]
              },
              {
                  "Name": "App-Sitecore9Client",
                  "Files": [
                      {
                          "Name": "/package.json",
                          "Lines": [
                              "orion-design-tokens:^2.7.3",
                              "orion-icons:^2.0.0",
                              "orion-web-core-style-sheets:^2.7.1"
                          ]
                      }
                  ]
              },
              {
                  "Name": "HeaderFooter",
                  "Files": [
                      {
                          "Name": "/package.json",
                          "Lines": [
                              "orion-design-tokens:1.1.523707019"
                          ]
                      }
                  ]
              },
              {
                  "Name": "App-RouteMapClient",
                  "Files": [
                      {
                          "Name": "/package.json",
                          "Lines": [
                              "ods-button:^4.2.0",
                              "orion-design-tokens:^2.10.4",
                              "orion-icons:^2.0.2",
                              "orion-web-core-style-sheets:^2.8.4"
                          ]
                      }
                  ]
              },
              {
                  "Name": "Sitecore8",
                  "Files": [
                      {
                          "Name": "/AS.com Sitecore/external-components/package.json",
                          "Lines": [
                              "orion-design-tokens:^2.0.526637919",
                              "ods-button:^2.5.534038314",
                              "orion-web-core-style-sheets:^1.1.0"
                          ]
                      },
                      {
                          "Name": "/AS.com Sitecore/package.json",
                          "Lines": [
                              "orion-design-tokens:1.0.503756086"
                          ]
                      }
                  ]
              }
          ]
      },
      {
          "Name": "CustomerMobile",
          "Repositories": [
              {
                  "Name": "svelte-poc",
                  "Files": [
                      {
                          "Name": "/package.json",
                          "Lines": [
                              "icons:^3.1.1",
                              "ods-button:^4.4.5",
                              "orion-design-tokens:^2.10.13",
                              "orion-web-core-style-sheets:^2.9.1"
                          ]
                      }
                  ]
              },
              {
                  "Name": "MobileWeb",
                  "Files": [
                      {
                          "Name": "/Website/m.alaskaair.com/package.json",
                          "Lines": [
                              "ods-button:~2.9.2",
                              "orion-design-tokens:^2.7.3",
                              "orion-icons:~1.7.2",
                              "orion-web-core-style-sheets:~2.6.9"
                          ]
                      }
                  ]
              },
              {
                  "Name": "Ryoko",
                  "Files": [
                      {
                          "Name": "/site/package.json",
                          "Lines": [
                              "ods-button:^4.3.1",
                              "orion-design-tokens:^2.10.9",
                              "orion-icons:^2.1.2",
                              "orion-web-core-style-sheets:^2.8.12",
                              "*:<rootDir>src/Mocks/FileMock.ts"
                          ]
                      }
                  ]
              },
              {
                  "Name": "PreorderFoodWeb",
                  "Files": [
                      {
                          "Name": "/Site/package.json",
                          "Lines": [
                              "ods-button:~2.9.2",
                              "ods-hyperlink:~1.0.9",
                              "ods-inputoptions:~1.1.4",
                              "orion-design-tokens:^2.7.3",
                              "orion-icons:^1.7.2",
                              "orion-web-core-style-sheets:~2.6.9"
                          ]
                      }
                  ]
              }
          ]
      },
      {
          "Name": "AlaskaAirCom",
          "Repositories": [
              {
                  "Name": "ECertificateUI",
                  "Files": [
                      {
                          "Name": "/ECertificateUI/ClientApp/package.json",
                          "Lines": [
                              "ods-button:^2.9.2",
                              "orion-design-tokens:^2.8.0"
                          ]
                      }
                  ]
              },
              {
                  "Name": "Deprecated-SitecorePaaS82u3",
                  "Files": [
                      {
                          "Name": "/AS.com Sitecore/external-components/package.json",
                          "Lines": [
                              "orion-design-tokens:^2.0.526637919",
                              "ods-button:^2.5.534038314",
                              "orion-web-core-style-sheets:^1.1.0"
                          ]
                      },
                      {
                          "Name": "/AS.com Sitecore/package.json",
                          "Lines": [
                              "orion-design-tokens:1.0.503756086"
                          ]
                      }
                  ]
              },
              {
                  "Name": "AlaskaAirCom",
                  "Files": [
                      {
                          "Name": "/package.json",
                          "Lines": [
                              "ods-toast:^1.0.6",
                              "orion-design-tokens:^2.7.3",
                              "orion-icons:^1.7.3",
                              "orion-web-core-style-sheets:^2.9.4"
                          ]
                      }
                  ]
              }
          ]
      },
      {
          "Name": "E_Retain_NonFlightPartners",
          "Repositories": [
              {
                  "Name": "Web-LoungeEnrollment",
                  "Files": [
                      {
                          "Name": "/package.json",
                          "Lines": [
                              "ods-button:^3.0.3",
                              "ods-hyperlink:^1.3.0",
                              "orion-design-tokens:^2.10.0",
                              "orion-icons:^1.7.3",
                              "orion-web-core-style-sheets:2.7.1"
                          ]
                      }
                  ]
              }
          ]
      }
  ]
}

export default getAuroUseData;
export {generateFileTableData, getTableHeaders};