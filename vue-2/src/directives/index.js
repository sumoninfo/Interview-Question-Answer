import Vue from "vue";

Vue.directive("changestyle",{
    bind(e1,binding, vnode) {
        console.log(e1);
        console.log(binding.value.color);
        console.log(vnode);
        e1.style.color=binding.value.color;
        e1.style.fontSize = "30px";
    }
});

Vue.directive('demo', {
    bind: function (el, binding, vnode) {
        var s = JSON.stringify
        el.innerHTML =
            'name: '       + s(binding.name) + '<br>' +
            'value: '      + s(binding.value) + '<br>' +
            'expression: ' + s(binding.expression) + '<br>' +
            'argument: '   + s(binding.arg) + '<br>' +
            'modifiers: '  + s(binding.modifiers) + '<br>' +
            'vnode keys: ' + Object.keys(vnode).join(', ')
    }
})