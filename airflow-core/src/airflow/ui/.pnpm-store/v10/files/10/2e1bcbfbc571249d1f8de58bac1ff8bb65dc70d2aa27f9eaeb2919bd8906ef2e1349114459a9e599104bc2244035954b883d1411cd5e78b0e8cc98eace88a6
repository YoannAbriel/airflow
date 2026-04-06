"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationInputExamples = exports.PathModificationExamples = exports.OperationSelectionExamples = exports.DescriptionMergeBehaviourExamples = exports.DescriptionTitleExamples = exports.DisputeExamples = exports.DisputeSuffixExamples = exports.DisputePrefixExamples = void 0;
exports.DisputePrefixExamples = [
    {
        prefix: 'SomePrefix'
    },
    {
        prefix: 'SomePrefix',
        alwaysApply: true
    }
];
exports.DisputeSuffixExamples = [
    {
        suffix: 'Some suffix'
    },
    {
        suffix: 'Some suffix',
        alwaysApply: true
    }
];
exports.DisputeExamples = [
    ...exports.DisputePrefixExamples,
    ...exports.DisputeSuffixExamples,
];
exports.DescriptionTitleExamples = [
    {
        value: 'Title 1'
    },
    {
        value: 'Title Level 2',
        headingLevel: 2
    },
    {
        value: 'Inperceptible title',
        headingLevel: 6
    }
];
const DescriptionMergeBehavioursWithTitles = exports.DescriptionTitleExamples.map(title => ({
    append: true,
    title
}));
exports.DescriptionMergeBehaviourExamples = [
    {
        append: true
    },
    ...DescriptionMergeBehavioursWithTitles
];
exports.OperationSelectionExamples = [
    {
        includeTags: ['include-this-tag-only']
    },
    {
        excludeTags: ['exclude-these-tags']
    },
    {
        includeTags: ['select-this-first'],
        excludeTags: ['filter-out-with-this-tag']
    }
];
exports.PathModificationExamples = [
    {
        stripStart: 'Model'
    },
    {
        prepend: 'Model'
    },
    {
        stripStart: 'Jira',
        prepend: 'Object'
    }
];
exports.ConfigurationInputExamples = [
    [
        {
            inputFile: './swagger.json'
        },
        {
            inputURL: 'https://developer.atlassian.com/cloud/jira/platform/swagger-v3.v3.json'
        }
    ],
    [
        {
            inputFile: './swagger.json'
        },
        {
            inputURL: 'https://developer.atlassian.com/cloud/jira/platform/swagger-v3.v3.json'
        },
        {
            inputFile: './swagger.json',
            description: {
                append: true,
                title: {
                    value: 'My Swagger Description',
                    headingLevel: 1
                }
            },
            dispute: {
                suffix: 'Model',
                alwaysApply: true
            },
            operationSelection: {
                includeTags: ['public'],
                excludeTags: ['private']
            },
            pathModification: {
                stripStart: '/rest',
                prepend: '/jira'
            }
        }
    ]
];
