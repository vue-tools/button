import Vue from 'vue'
import Buttons from '../src'
import { expect } from 'chai'

describe('vt-button', () => {
    it('button default', () => {
        let vm = new Vue({
            render(h) {
                return (
                    <Buttons>default button</Buttons>
                )
            },
            components: {
                Buttons
            }
        }).$mount()

        expect(vm.$el.classList.contains('ui-button')).to.equal(true)
        expect(vm.$el.disabled).to.equal(false)
    })
    it('button disabled', () => {
        let vm = new Vue({
            render(h) {
                return (
                    <Buttons disabled>disabled button</Buttons>
                )
            },
            components: {
                Buttons
            }
        }).$mount()
        expect(vm.$el.disabled).to.equal(true)
    })
    it('button size', () => {
        let vm = new Vue({
            render(h) {
                return (
                    <div class="button-size">
                        <Buttons id="small" size="small">small button</Buttons>
                        <Buttons id="mini" size="mini">mini button</Buttons>
                        <Buttons id="large" size="large">large button</Buttons>
                    </div>
                )
            },
            components: {
                Buttons
            }
        }).$mount()
        expect(vm.$el.querySelector('#small').classList.contains('ui-button--small')).to.equal(true)
        expect(vm.$el.querySelector('#mini').classList.contains('ui-button--mini')).to.equal(true)
        expect(vm.$el.querySelector('#large').classList.contains('ui-button--large')).to.equal(true)
    })
    it('button type', () => {
        let vm = new Vue({
            render(h) {
                return (
                    <div class="button-type">
                        <Buttons id="warn" type="warn">warn button</Buttons>
                        <Buttons id="info" type="info">info button</Buttons>
                        <Buttons id="danger" type="danger">danger button</Buttons>
                        <Buttons id="success" type="success">success button</Buttons>
                    </div>
                )
            },
            components: {
                Buttons
            }
        }).$mount()
        expect(vm.$el.querySelector('#warn').classList.contains('ui-button--warn')).to.equal(true)
        expect(vm.$el.querySelector('#info').classList.contains('ui-button--info')).to.equal(true)
        expect(vm.$el.querySelector('#danger').classList.contains('ui-button--danger')).to.equal(true)
        expect(vm.$el.querySelector('#success').classList.contains('ui-button--success')).to.equal(true)
    })
    it('button plain', () => {
        let vm = new Vue({
            render(h) {
                return (
                    <div class="button-size">
                        <Buttons plain id="warn" type="warn">warn button</Buttons>
                        <Buttons plain id="info" type="info">info button</Buttons>
                        <Buttons plain id="danger" type="danger">danger button</Buttons>
                        <Buttons plain id="success" type="success">success button</Buttons>
                    </div>
                )
            },
            components: {
                Buttons
            }
        }).$mount()
        expect(vm.$el.querySelector('#warn').classList.contains('ui-button--plain-warn')).to.equal(true)
        expect(vm.$el.querySelector('#info').classList.contains('ui-button--plain-info')).to.equal(true)
        expect(vm.$el.querySelector('#danger').classList.contains('ui-button--plain-danger')).to.equal(true)
        expect(vm.$el.querySelector('#success').classList.contains('ui-button--plain-success')).to.equal(true)
    })
    it('button btn type', () => {
        let vm = new Vue({
            render(h) {
                return (
                    <div class="button-type">
                        <Buttons id="submit" html-type="submit">submit button</Buttons>
                        <Buttons id="button">submit button</Buttons>
                    </div>
                )
            },
            components: {
                Buttons
            }
        }).$mount()
        expect(vm.$el.querySelector('#submit').type).to.equal('submit')
        expect(vm.$el.querySelector('#button').type).to.equal('button')
    })
})