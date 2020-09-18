# Onboarding App

## Introduction

This is a sample Telehealth app that walks users through a set of predefined onboarding questions.
The objective of this project is to demonstrate knowledge of **Javascript**, **React Native**, and **Redux** best practices, code organization and app styling.

## How it works

All onboarding questions are predefined in [a provided json file](https://github.com/guillaume250/Onboarding/blob/master/data/questions.json). An onboarding question consists of an object that has an `id`, `validation`, and `question` properties.

The onboarding flow starts with the question with an `id` of `1`. The `validation` property indicates user input validations for that particular question. Some questions have a `path` property that represents the `id` of the following onboarding question. A question with no `path` property is a final question.
