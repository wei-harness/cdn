if (typeof coveoRegexp === 'undefined') {
  const coveoRegexp = /#{([^{]+)}/g;
  function createStringFromTemplate(str, rplc) {
    return str.replace(coveoRegexp, function (ignore, key) {
      return (key = rplc[key]) == null ? '' : key;
    });
  }
  const baseTemplate = `
<div class="coveo-result-frame">
    <div class="coveo-result-cell" style="vertical-align: top;">
        <div class="coveo-result-row" style="margin-top:0;">
            <div class="harness-search-source">
                <span class="CoveoFieldValue" data-field="#{tagFieldName}" data-text-caption="" data-with-label="false"></span>
            </div>
        </div>
        <div class="coveo-result-row" style="margin-top:10px;">
            <div class="coveo-result-cell" style="vertical-align:top;font-size:16px;" role="heading" aria-level="2">
                <a class="CoveoResultLink"></a>
            </div>
            #{imagePlaceHolder}
        </div>
        <div class="coveo-result-row">
            <div class="coveo-result-cell">
                <a class='CoveoPrintableUri'></a>
            </div>
        </div>
        <div class="coveo-result-row" style="margin-top:10px;">
            <div class="coveo-result-cell">
                <span class="CoveoExcerpt"></span>
            </div>
            #{imageCell}
        </div>
        <div class="coveo-result-row">
            <div class="coveo-result-cell">
                <div class="CoveoMissingTerms"></div>
            </div>
        </div>
        <div class="coveo-result-row" style="margin-top:0;">
            <div class="harness-search-module">
                <span class="CoveoFieldValue#{moduleClassName}" data-field="@commonmodule" data-text-caption="" data-with-label="false"></span>
                <span class="CoveoFieldValue" data-field="@categoryname" data-text-caption="" data-with-label="false"></span>
            </div>
        </div>
    </div>
</div>
`;
  const withImage = `
<div class="coveo-result-cell-image">
    <span class="CoveoFieldValue" data-field="@featuredimage" data-helper="image" data-html-value="true"></span>
</div>
`;
  const withoutImage = '';
  const imagePlaceHolder = `
<div class="coveo-result-cell-image">
</div>
`;
  const CoveoFieldValue = '';
  const CoveoFieldValueCI = ' CoveoFieldValueCI';
  const CoveoFieldValueCD = ' CoveoFieldValueCD';
  const CoveoFieldValueCC = ' CoveoFieldValueCC';
  const CoveoFieldValueFF = ' CoveoFieldValueFF';
  const CoveoFieldValueCE = ' CoveoFieldValueCE';
  const CoveoFieldValueCET = ' CoveoFieldValueCET';
  const CoveoFieldValueSTO = ' CoveoFieldValueSTO';
  const CoveoFieldValueSRM = ' CoveoFieldValueSRM';
  const CoveoFieldValueSEI = ' CoveoFieldValueSEI';
  const CoveoFieldValueSSCA = ' CoveoFieldValueSSCA';
  const CoveoFieldValueIDP = ' CoveoFieldValueIDP';
  const CoveoFieldValueIACM = ' CoveoFieldValueIACM';
  const CoveoFieldValueGitness = ' CoveoFieldValueGitness';
  const CoveoFieldValueCR = ' CoveoFieldValueCR';
  const CoveoFieldValueDBDevOps = ' CoveoFieldValueDBDevOps';
  const CoveoFieldValueAR = ' CoveoFieldValueAR';
  const CoveoFieldValueCDE = ' CoveoFieldValueCDE';
  const CoveoFieldValueArmory = ' CoveoFieldValueArmory';
  const CoveoFieldValuePlatform = ' CoveoFieldValuePlatform';

  const CoveoFieldValueFirstGen = ' CoveoFieldValueFirstGen';
  const CoveoFieldValueNextGen = ' CoveoFieldValueNextGen';

  const tagName = '@commonsource';
  const tagNameFirstGenDocs = '@categoryname';

  /* ---------- Results Without featured Images ---------- */

  Coveo.TemplateCache.registerTemplate(
    'ResultWithImage-CI',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withImage,
        moduleClassName: CoveoFieldValueCI,
        imagePlaceHolder: imagePlaceHolder,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'featuredimage',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Continuous Integration'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithImage-CD',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withImage,
        moduleClassName: CoveoFieldValueCD,
        imagePlaceHolder: imagePlaceHolder,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'featuredimage',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Continuous Delivery'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithImage-CC',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withImage,
        moduleClassName: CoveoFieldValueCC,
        imagePlaceHolder: imagePlaceHolder,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'featuredimage',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Cloud Cost Management'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithImage-FF',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withImage,
        moduleClassName: CoveoFieldValueFF,
        imagePlaceHolder: imagePlaceHolder,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'featuredimage',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Feature Flags'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithImage-CE',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withImage,
        moduleClassName: CoveoFieldValueCE,
        imagePlaceHolder: imagePlaceHolder,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'featuredimage',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Chaos Engineering'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithImage-CET',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withImage,
        moduleClassName: CoveoFieldValueCET,
        imagePlaceHolder: imagePlaceHolder,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'featuredimage',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Continuous Error Tracking'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithImage-SEI',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withImage,
        moduleClassName: CoveoFieldValueSEI,
        imagePlaceHolder: imagePlaceHolder,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'featuredimage',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Software Engineering Insights'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithImage-SSCA',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withImage,
        moduleClassName: CoveoFieldValueSSCA,
        imagePlaceHolder: imagePlaceHolder,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'featuredimage',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Software Supply Chain Assurance'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithImage-IDP',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withImage,
        moduleClassName: CoveoFieldValueIDP,
        imagePlaceHolder: imagePlaceHolder,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'featuredimage',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Internal Developer Portal'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithImage-IACM',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withImage,
        moduleClassName: CoveoFieldValueIACM,
        imagePlaceHolder: imagePlaceHolder,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'featuredimage',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Infrastructure as Code Management'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithImage-Gitness',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withImage,
        moduleClassName: CoveoFieldValueGitness,
        imagePlaceHolder: imagePlaceHolder,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'featuredimage',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Gitness'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithImage-CR',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withImage,
        moduleClassName: CoveoFieldValueCR,
        imagePlaceHolder: imagePlaceHolder,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'featuredimage',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Code Repository'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithImage-STO',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withImage,
        moduleClassName: CoveoFieldValueSTO,
        imagePlaceHolder: imagePlaceHolder,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'featuredimage',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Security Testing Orchestration'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithImage-SRM',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withImage,
        moduleClassName: CoveoFieldValueSRM,
        imagePlaceHolder: imagePlaceHolder,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'featuredimage',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Service Reliability Management'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithImage-Platform',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withImage,
        moduleClassName: CoveoFieldValuePlatform,
        imagePlaceHolder: imagePlaceHolder,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'featuredimage',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Harness Platform'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithImage-DBDevOps',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withImage,
        moduleClassName: CoveoFieldValueDBDevOps,
        imagePlaceHolder: imagePlaceHolder,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'featuredimage',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Database DevOps'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithImage-AR',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withImage,
        moduleClassName: CoveoFieldValueAR,
        imagePlaceHolder: imagePlaceHolder,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'featuredimage',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Artifact Registry'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithImage-CDE',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withImage,
        moduleClassName: CoveoFieldValueCDE,
        imagePlaceHolder: imagePlaceHolder,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'featuredimage',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Cloud Development Environments'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  // Armory
  Coveo.TemplateCache.registerTemplate(
    'ResultWithImage-Armory',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withImage,
        moduleClassName: CoveoFieldValueArmory,
        imagePlaceHolder: imagePlaceHolder,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'featuredimage',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Armory'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  /* @categoryname with image */

  Coveo.TemplateCache.registerTemplate(
    'ResultWithImage-FirstGen',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withImage,
        moduleClassName: CoveoFieldValueFirstGen,
        imagePlaceHolder: imagePlaceHolder,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'featuredimage',
            values: [],
          },
          {
            field: 'categoryname',
            values: ['FirstGen Docs'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  // Defult template for results with featured images
  Coveo.TemplateCache.registerTemplate(
    'ResultWithImage',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withImage,
        moduleClassName: CoveoFieldValue,
        imagePlaceHolder: imagePlaceHolder,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        //   fieldsToMatch: [
        //     {
        //       field: "source",
        //       values: [
        //         "Drone Docs",
        //         "Drone Community",
        //         "Harness Blog",
        //         "Harness Community",
        //         "Harness Docs",
        //         "Harness University",
        //         "Harness.io",
        //         "NextGen API references",
        //         "NG Docs",
        //       ],
        //     },
        //   ],
        fieldsToMatch: [
          {
            field: 'featuredimage',
            values: [],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  /* ---------- Results Without featured Images ---------- */

  Coveo.TemplateCache.registerTemplate(
    'ResultWithoutImage-CI',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withoutImage,
        moduleClassName: CoveoFieldValueCI,
        imagePlaceHolder: withoutImage,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'uri',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Continuous Integration'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithoutImage-CD',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withoutImage,
        moduleClassName: CoveoFieldValueCD,
        imagePlaceHolder: withoutImage,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'uri',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Continuous Delivery'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithoutImage-CC',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withoutImage,
        moduleClassName: CoveoFieldValueCC,
        imagePlaceHolder: withoutImage,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'uri',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Cloud Cost Management'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithoutImage-FF',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withoutImage,
        moduleClassName: CoveoFieldValueFF,
        imagePlaceHolder: withoutImage,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'uri',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Feature Flags'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithoutImage-CE',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withoutImage,
        moduleClassName: CoveoFieldValueCE,
        imagePlaceHolder: withoutImage,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'uri',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Chaos Engineering'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithoutImage-CET',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withoutImage,
        moduleClassName: CoveoFieldValueCET,
        imagePlaceHolder: withoutImage,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'uri',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Continuous Error Tracking'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithoutImage-SEI',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withoutImage,
        moduleClassName: CoveoFieldValueSEI,
        imagePlaceHolder: withoutImage,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'uri',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Software Engineering Insights'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithoutImage-SSCA',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withoutImage,
        moduleClassName: CoveoFieldValueSSCA,
        imagePlaceHolder: withoutImage,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'uri',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Software Supply Chain Assurance'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithoutImage-IDP',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withoutImage,
        moduleClassName: CoveoFieldValueIDP,
        imagePlaceHolder: withoutImage,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'uri',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Internal Developer Portal'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithoutImage-IACM',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withoutImage,
        moduleClassName: CoveoFieldValueIACM,
        imagePlaceHolder: withoutImage,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'uri',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Infrastructure as Code Management'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithoutImage-Gitness',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withoutImage,
        moduleClassName: CoveoFieldValueGitness,
        imagePlaceHolder: withoutImage,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'uri',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Gitness'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithoutImage-CR',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withoutImage,
        moduleClassName: CoveoFieldValueCR,
        imagePlaceHolder: withoutImage,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'uri',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Code Repository'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithoutImage-STO',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withoutImage,
        moduleClassName: CoveoFieldValueSTO,
        imagePlaceHolder: withoutImage,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'uri',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Security Testing Orchestration'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithoutImage-SRM',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withoutImage,
        moduleClassName: CoveoFieldValueSRM,
        imagePlaceHolder: withoutImage,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'uri',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Service Reliability Management'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithoutImage-DBDevOps',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withoutImage,
        moduleClassName: CoveoFieldValueDBDevOps,
        imagePlaceHolder: withoutImage,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'uri',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Database DevOps'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithoutImage-AR',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withoutImage,
        moduleClassName: CoveoFieldValueAR,
        imagePlaceHolder: withoutImage,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'uri',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Artifact Registry'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithoutImage-CDE',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withoutImage,
        moduleClassName: CoveoFieldValueCDE,
        imagePlaceHolder: withoutImage,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'uri',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Cloud Development Environments'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  // Armory
  Coveo.TemplateCache.registerTemplate(
    'ResultWithoutImage-Armory',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withoutImage,
        moduleClassName: CoveoFieldValueArmory,
        imagePlaceHolder: withoutImage,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'uri',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Armory'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  Coveo.TemplateCache.registerTemplate(
    'ResultWithoutImage-Platform',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withoutImage,
        moduleClassName: CoveoFieldValuePlatform,
        imagePlaceHolder: withoutImage,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'uri',
            values: [],
          },
          {
            field: 'commonmodule',
            values: ['Harness Platform'],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );

  /* @categoryname with image */

  /* ---------- Results Without Image - FirstGen Docs 

Coveo.TemplateCache.registerTemplate(
  "ResultWithoutImage-FirstGen-Docs",
  Coveo.HtmlTemplate.fromString(
    createStringFromTemplate(baseTemplate, {
      imageCell: withoutImage,
      moduleClassName: CoveoFieldValueCI,
      imagePlaceHolder: withoutImage,
      tagFieldName: tagNameFirstGenDocs,
    }),
    {
      condition: null,
      layout: "list",
      fieldsToMatch: [
        {
          field: "uri",
          values: [],
        },
        {
          field: "categoryname",
          values: ["FirstGen Docs", "NextGen Docs"],
        },
      ],
      mobile: null,
      role: null,
    }
  ),
  true,
  true
);
---------- */

  // Defult template for results without featured images
  Coveo.TemplateCache.registerTemplate(
    'ResultWithoutImage',
    Coveo.HtmlTemplate.fromString(
      createStringFromTemplate(baseTemplate, {
        imageCell: withoutImage,
        moduleClassName: CoveoFieldValue,
        imagePlaceHolder: withoutImage,
        tagFieldName: tagName,
      }),
      {
        condition: null,
        layout: 'list',
        fieldsToMatch: [
          {
            field: 'uri',
            values: [],
          },
        ],
        mobile: null,
        role: null,
      }
    ),
    true,
    true
  );
}
