module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'Create a react-native component',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'name'
        }],
        actions: [{
            type: 'add',
            path: 'src/ui/{{name}}/{{name}}.component.js',
            templateFile: '.plop/component.hbs'
        }]
    });

    plop.setGenerator('action', {
        description: 'Create a redux action and handler',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'name'
        }],
        actions: [{
            type: 'add',
            path: 'src/core/{{name}}/{{name}}.redux.js',
            templateFile: '.plop/action.hbs'
        }]
    });
};