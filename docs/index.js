var Model = {
    containers: {
        input: wrapInForm,
        autocomplete: wrapInForm,
        password: wrapInForm,
        select: wrapInForm,
        fieldset: function(fieldset) {
            return {
                view: "form",
                fieldsets: [fieldset]
            }
        },
        dropdown: function(dropdown) {
            return {
                view: "button",
                label: "Show dropdown",
                dropdown: dropdown.dropdown
            }
        }
    },
    components: {
        autocomplete: function () {
            return {
                view: "autocomplete",
                sources: [
                    {value: "Curl"},
                    {value: "Look"},
                    {value: "Age"},
                    {value: "Walk"},
                    {value: "Elope"},
                    {value: "Dig"}
                ]
            }
        },
        button: function () {
            return {
                view: "button",
                label: "Curl"
            }
        },
        dropdown: function () {
            return {
                dropdown: {
                    view: "list",
                    data: [
                        {label: "Curl into a furry donut."},
                        {label: "Look into a furry donut."},
                        {label: "Age into a furry donut."},
                        {label: "Walk into a furry donut."},
                        {label: "Elope into a furry donut."},
                        {label: "Dig into a furry donut."}
                    ]
                }
            }
        },
        element: function () {
            return {
                template: "<p>{{action}} into a furry donut.</p>",
                action: "Curl"
            }
        },
        fieldset: function () {
            return {
                view: "fieldset",
                data: [
                    {formLabel: "User", view: "input", value: "Hello"},
                    {formLabel: "Password", view: "password", placeholder: "Password"},
                    {view: "button", type: "primary", label: "Login", inputWidth: "medium"}
                ]
            }
        },
        form: function () {
            return {
                view: "form",
                fieldset: [
                    {formLabel: "User", view: "input", value: "Hello"},
                    {formLabel: "Password", view: "password", placeholder: "Password"},
                    {view: "button", type: "primary", label: "Login", inputWidth: "medium"}
                ]
            }
        },
        flexgrid: function () {
            return {
                cells: [
                    {
                        view: "list",
                        data: [
                            {label: "Curl into a furry donut."},
                            {label: "Look into a furry donut."},
                            {label: "Age into a furry donut."},
                            {label: "Walk into a furry donut."},
                            {label: "Elope into a furry donut."},
                            {label: "Dig into a furry donut."}
                        ]
                    },
                    {
                        view: "form",
                        fieldset: [
                            {formLabel: "Curl", view: "input", type: "checkbox", checked: true},
                            {formLabel: "into", view: "input", value: "a furry donut"}
                        ]
                    }
                ]
            }
        },
        icon: function () {
            return {
                view: "icon",
                icon: "uk-icon-information"
            }
        },
        image: function () {
            return {
                view: "image",
                src: ""
            }
        },
        input: function () {
            return {
                view: "input"
            }
        },
        label: function () {
            return {
                view: "label",
                label: "Curl into a furry donut."
            }
        },
        link: function () {
            return {
                view: "link",
                label: "Curl into a furry donut."
            }
        },
        list: function () {
            return {
                view: "list",
                data: [
                    {label: "Curl into a furry donut."},
                    {label: "Look into a furry donut."},
                    {label: "Age into a furry donut."},
                    {label: "Walk into a furry donut."},
                    {label: "Elope into a furry donut."},
                    {label: "Dig into a furry donut."}
                ]
            }
        },
        modal: function () {
            return {
                view: "modal",
                header: {
                    view: "label",
                    tagClass: "H3",
                    label: "Stale coffee is exquisite!"
                },
                body: {
                    view: "label",
                    label: "Curl into a furry donut."
                },
                footer: {
                    cells: [
                        {view: "button", label: "No way"},
                        {view: "button", type: "primary", label: "Yup"}
                    ]
                }
            }
        },
        password: function () {
            return {
                view: "password"
            }
        },
        progress: function() {
            return {
                view: "progress",
                on: {
                    onInitialized: function() {
                        this.setValue(80);
                    }
                }
            }
        },
        search: function () {
            return {
                view: "search"
            }
        },
        select: function () {
            return {
                view: "select",
                data: [
                    {label: "Curl"},
                    {label: "Look"},
                    {label: "Age"},
                    {label: "Walk"},
                    {label: "Elope"},
                    {label: "Dig"}
                ]
            }
        },
        table: function () {
            return {
                view: "table",
                headers: [
                    {label: "Action"},
                    {label: "Preposition"},
                    {label: "Object"}
                ],
                columns: [
                    {name: "action"},
                    {name: "preposition"},
                    {name: "directObject.object", template: "<code>{{name}}</code>"}
                ],
                data: [
                    {action: "Curl", preposition: "into", directObject: {article: "a", object: "furry donut"}},
                    {action: "Look", preposition: "into", directObject: {article: "a", object: "furry donut"}},
                    {action: "Age", preposition: "into", directObject: {article: "a", object: "furry donut"}},
                    {action: "Walk", preposition: "into", directObject: {article: "a", object: "furry donut"}},
                    {action: "Elope", preposition: "into", directObject: {article: "a", object: "furry donut"}},
                    {action: "Dig", preposition: "into", directObject: {article: "a", object: "furry donut"}}
                ]
            }
        },
        toggle: function () {
            return {
                view: "toggle",
                checked: true
            }
        },
        tree: function () {
            return {
                view: "tree",
                data: [
                    {label: "Curl", id: "root"},
                    {label: "into", id: "into", $parent: "root"},
                    {label: "a", id: "a", $parent: "root"},
                    {label: "furry", id: "furry", $parent: "a"},
                    {label: "donut", id: "donut", $parent: "a"}
                ]
            }
        }
    },
    properties: UI.forIn(function(value) {
        return UI.extend({}, value.prototype.$defaults)
    }, UI.components)
};

function wrapInForm(input) {
    return {
        view: "form",
        fieldset: [input]
    }
}

UI.new({
    view: 'list',
    listStyle: 'navbar offcanvas',
    css: 'uk-block-secondary',
    fill: 'width',
    margin: 'bottom-lg',
    data: [
        {label: "Github", css: "uk-text-contrast"}
    ]
}, document.getElementById('navbar'));

UI.new({
    view: 'list',
    listStyle: 'side',
    minWidth: '180px',
    margin: 'right-lg',
    data: [
        {label: "INTRODUCTION", $css: "uk-active", link: true},
        {label: "GETTING STARTED", link: true},
        {divider: true}
    ].concat(Object.keys(UI.components).sort().map(function (n) {
        return {label: n.toUpperCase(), value: n}
    })),
    on: {
        onItemClick: function (item) {
            if (!item.link) {
                // If link is empty, assume it points to a component
                this.setActiveLabel(item.label);
                $$('methodList').parseMethods(UI.components[item.value]);
                $$('cssForm').parseProperties(UI.components[item.value]);
                $$('miscForm').parseProperties(UI.components[item.value]);
                var config = $$('codeView').parseCode(item.value);
                $$('componentView').parseConfig(config, item.value);
            }
        }
    }
}, document.getElementById('sidebar'));

UI.new({
    id: 'mainView',
    layout: 'column',
    visibleBatches: UI.list(['properties', 'tab', 'component']), // Custom field
    cells: [
        {
            batch: 'tab',
            view: 'list',
            listStyle: 'tab',
            tab: true,
            margin: 'bottom-lg',
            data: [
                {label: "COMPONENT", value: "component", $css: "uk-active"},
                {label: "CODE", value: "code"}
            ],
            on: {
                onItemClick: function (item) {
                    this.setActiveLabel(item.label);
                    var mainView = $$('mainView');

                    switch (item.value) {
                        case 'component':
                            mainView.visibleBatches.replace('code', 'component');
                            mainView.showBatch(mainView.visibleBatches);
                            break;

                        case 'code':
                            mainView.visibleBatches.replace('component', 'code');
                            mainView.showBatch(mainView.visibleBatches);
                            break;
                    }
                }
            }
        },
        {
            id: 'componentView',
            batch: 'component',
            size: 'none',
            cells: [],
            parseConfig: function(config, componentName) {
                if (this.childComponent) {
                    this.removeChild(this.childComponent);
                }
                if (Model.containers[componentName]) {
                    config = Model.containers[componentName](config);
                }
                this.childComponent = this.addChild(config);
            }
        },
        {
            id: 'codeView',
            batch: 'code',
            template: "<pre><code>UI.new({{code}}, document.body);</code></pre>",
            code: '',
            parseCode: function(name) {
                var objectModel = UI.extend(UI.extend({}, Model.properties[name]), Model.components[name]());
                var defaults = UI.components[name].prototype.$defaults;
                for (var k in objectModel) {
                    if (objectModel.hasOwnProperty(k)) {
                        if (objectModel[k] == defaults[k]) {
                            delete objectModel[k];
                        }
                    }
                }

                this.config.code = JSON.stringify(objectModel, null, "  ")
                    .replace(/&/g, '&amp;')
                    .replace(/"/g, '&quot;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;');

                this.render();

                return objectModel;
            }
        },
        {
            batch: 'tab',
            view: 'list',
            listStyle: 'tab',
            tab: true,
            margin: "top-lg",
            data: [
                {label: "PROPERTIES", value: "properties", $css: "uk-active"},
                {label: "METHODS", value: "methods"}
            ],
            on: {
                onItemClick: function (item) {
                    this.setActiveLabel(item.label);
                    var mainView = $$('mainView');

                    switch (item.value) {
                        case 'properties':
                            mainView.visibleBatches.replace('methods', 'properties');
                            mainView.showBatch(mainView.visibleBatches);
                            break;

                        case 'methods':
                            mainView.visibleBatches.replace('properties', 'methods');
                            mainView.showBatch(mainView.visibleBatches);
                            break;
                    }
                }
            }
        },
        {
            batch: 'properties',
            layout: 'column',
            cells: [
                {
                    view: 'label', margin: "top-lg", css: 'uk-alert',
                    label:'<span class="uk-badge uk-badge-warning">TIP</span>&nbsp;&nbsp;Changing these properties will affect the displayed component.'
                },
                {
                    view: 'label', margin: "top",
                    label: '<strong>CSS</strong>'
                },
                {
                    id: 'cssForm',
                    view: 'form',
                    margin: "top",
                    formStyle: 'line',
                    layout: 'horizontal',
                    parseProperties: function (component) {
                        var setters = component.prototype.$setters;
                        var name = component.prototype.__name__;
                        var model = Model.properties[name];
                        var properties = Object.keys(setters);

                        this.getFieldset().setData(properties.sort().filter(function (cssName) {
                            return setters[cssName].options;
                        }).map(function(cssName) {
                            var cssValue = model[cssName] || '';
                            var setter = setters[cssName];
                            var labelTemplate = '{{label}}&nbsp<i class="uk-icon-chevron-down"></i>';
                            return {
                                formLabel: UI.replaceString('<code>{{name}}</code>', {name: cssName}),
                                view: 'button',
                                size: 'small',
                                label: UI.replaceString(labelTemplate, {label: model[cssName] || ''}),
                                minWidth: '100px',
                                dropdown: {
                                    view: 'list',
                                    data: Object.keys(setter.options).sort().map(function(option) {
                                        return {
                                            label: option || '&lt;empty&gt;',
                                            value: option,
                                            selected: option ? cssValue.toString().indexOf(option) != -1 : model[cssName] == '',
                                            template: function(item) {
                                                return item.label + (item.selected ? '<i class="uk-float-right uk-icon-checkmark"></i>' : '');
                                            }
                                        }
                                    }),
                                    on: {
                                        onOpen: function(config, node, master) {
                                            this.masterComponent = master;
                                        },
                                        onClosed: function() {
                                            this.masterComponent = null;
                                        },
                                        onItemClick: function(item) {
                                            item.selected = !item.selected;

                                            if (item.value == '' || !setter.multipleAllowed) {
                                                this.each(function(nextNode) {
                                                    nextNode.selected = nextNode == item;
                                                    this.getComponent('id', nextNode.id).render();
                                                });
                                            }

                                            if (item.value) {
                                                var empty = this.findOne('value', '');
                                                empty.selected = false;
                                                this.getComponent('id', empty.id).render();
                                            }

                                            model[cssName] = UI.pluck(this.findWhere('selected', true), 'value').join(' ');
                                            this.getComponent('id', item.id).render();
                                            this.masterComponent.config.label = UI.replaceString(
                                                labelTemplate, {label: model[cssName].split(' ').join(', ')});
                                            this.masterComponent.render();
                                            var config = $$('codeView').parseCode(name);
                                            $$('componentView').parseConfig(config, name);
                                        }
                                    }
                                }
                            }
                        }));
                    }
                },
                {view: 'label', margin: "top-lg", label: '<strong>MISC</strong>'},
                {
                    id: 'miscForm',
                    view: 'form',
                    margin: "top",
                    formStyle: 'line',
                    layout: 'horizontal',
                    parseProperties: function (component) {
                        var meta = UI.extend({}, component.prototype.$setters._meta);
                        UI.extend(meta, component.prototype.$setters);

                        var properties = Object.keys(meta).filter(function(n) {
                            return n.charAt(0) != '$' && n.charAt(0) != '_';
                        });

                        this.getFieldset().setData(properties.sort().filter(function (n) {
                            return !UI.isFunction(meta[n]) || !meta[n].options;
                        }).map(function(n) {
                            return UI.extend(getViewConfig(meta[n]), {
                                formLabel: UI.replaceString('<code>{{name}}</code>', {name: n})
                            })
                        }));

                        function getViewConfig(property) {
                            if (UI.isString(property)) {
                                return {view: 'label', label: property};
                            }
                            else if (property.description) {
                                return {view: 'label', label: property.description};
                            }
                            else if (property.isText) {
                                return {view: 'input', size: 'small'};
                            }
                            else if (property.isBoolean) {
                                return {view: 'toggle'};
                            }
                            else if (property.options) {
                                return {
                                    view: 'select', size: 'small',
                                    data: property.options.map(function(n) {
                                        return {label: n}
                                    })
                                };
                            }
                            else {
                                return {}
                            }
                        }
                    }
                }
            ]
        },
        {
            batch: 'methods',
            id: 'methodList',
            view: 'list',
            listStyle: 'line',
            selectable: true,
            parseMethods: function (component) {
                this.setData(getComponentMethods(component).map(function (method) {
                    return {
                        view: 'element',
                        template: [
                            '<dl class="uk-description-list-horizontal">',
                            '<dt><code>{{name}}</code></dt><dd>{{summary}}</dd>',
                            (method.params && method.params.length ?
                                '<dt>Parameters</dt><dd class="uk-hidden-small">&nbsp;</dd>{{parameters}}' : ''),
                            (method.dispatch ? '<dt>Dispatch</dt><dd>{{dispatch}}</dd>' : ''),
                            (method.returns ? '<dt>Returns</dt><dd>{{returns}}</dd>' : ''),
                            '</dl>',
                            (method.example ? '<strong>Example</strong><pre>{{example}}</pre>' : '')
                        ].join(''),
                        name: method.name,
                        summary: method.summary,
                        dispatch: method.dispatch,
                        returns: method.returns ? formatReturnsString(method.returns) : null,
                        example: method.example,
                        parameters: method.params.map(function (n) {
                            return UI.replaceString(
                                '<dt class="uk-text-muted">{{name}}</dt><dd>{{description}}</dd>', n);
                        }).join('')
                    }
                }));
            }
        }
    ],
    on: {
        onInitialized: function () {
            this.showBatch(this.config.visibleBatches);
        }
    }
}, document.getElementById('main'));


function formatReturnsString(str) {
    var regex = /\{[^\s}]*}/;
    var type = str.match(regex);
    type = type ? type[0].slice(1, -1) : '';
    return str.replace(regex, UI.replaceString(
        '<div class="uk-badge uk-badge-notification">{{type}}</div>', {type: type}))
}

function getComponentMethods(component) {
    return Object.keys(component.prototype)
        .sort()
        .filter(function (n) {
            return (n.charAt(0) != '$' && n.charAt(0) != '_');
        })
        .map(function (n) {
            return extractDocString(n, component.prototype[n]);
        })
        .filter(function (n) {
            return !!n;
        });
}

function extractDocString(name, fn) {
    var fnStr = fn.toString();
    var startIndex = fnStr.indexOf('/**'),
        endIndex = fnStr.indexOf('*/');
    if (endIndex != -1 && startIndex != -1) {
        var docString = fnStr.slice(startIndex, endIndex);
        var lines = docString.split('\n').map(function (n) {
            return n.slice(n.indexOf('* ') + 2);
        }).slice(1, -1);
        var summary = '';
        var params = [];
        var dispatch = null,
            returns = null,
            example = null;

        lines.forEach(function (l) {
            l = l.split(' ');
            switch (l[0]) {
                case "@param":
                    params.push({name: l[1], description: l.slice(2).join(' ')});
                    break;
                case "@returns":
                    returns = l.slice(1).join(' ');
                    break;
                case "@dispatch":
                    dispatch = l.slice(1).join(' ');
                    break;
                case "@example":
                    example = l.slice(1).join(' ');
                    break;
                default:
                    summary += l.join(' ');
            }
        });
        return {name: name, summary: summary, dispatch: dispatch, returns: returns, params: params, example: example};
    }
}