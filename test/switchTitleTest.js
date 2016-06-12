'use strict'

var test = require('tape')
var sinon = require('sinon')

test('the switch is done after 5s', function (t) {
  t.plan(4)
  var fakeTimer = sinon.useFakeTimers()

  document.body.innerHTML = '<div class="me__active me__intro--active"></div><div class="me__intro"><span>foo</span></div>'

  t.ok(document.querySelector('.me__active').classList.contains('me__intro--active'), 'me__active is active')
  t.notOk(document.querySelector('.me__intro span').classList.contains('me__intro--active'), 'the real me__intro is not active')

  require('../src/javascripts/modules/switchTitle')

  fakeTimer.tick(5001)

  t.notOk(document.querySelector('.me__active').classList.contains('me__intro--active'), 'me__active is not active anymore')
  t.ok(document.querySelector('.me__intro span').classList.contains('me__intro--active'), 'the real me__intro is now active')

  fakeTimer.restore()
})
