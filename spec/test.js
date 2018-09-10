import {expect} from 'chai'
import sinon from 'sinon'
import * as hello from '../hello'

describe('sinon', function () {

    const sandbox = sinon.createSandbox()
    afterEach(() => sandbox.restore())

    it('should replace the hello function', function () {
        sandbox.stub(hello, 'hello').callsFake(function (name) {
            return `Hello, ${name} (from stub function)`
        })
        const result = hello.hello('sinon')
        expect(result).eq('Hello, sinon (from stub function)')
    })

    it('the hello.hello() should be the real one and not affected by other tests', () => {
        const result = hello.hello('sinon')
        expect(result).eq('Hello, sinon!')
    })

})