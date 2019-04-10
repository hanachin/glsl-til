precision mediump float;

uniform float time;

void main() {
  // gl_FragColor = vec4(0, abs(sin(time)), 0, 1);
  // gl_FragColor = vec4(0, abs(cos(time)), 0, 1);
  // gl_FragColor = vec4(0, abs(tan(time)), 0, 1);
  // gl_FragColor = vec4(0, fract(time), 0, 1);
  // gl_FragColor = vec4(0, fract(time), 0, 1);

  // slow
  // gl_FragColor = vec4(0, fract(time / 10.0), 0, 1);

  // fast
  // gl_FragColor = vec4(0, fract(time * 2.0), 0, 1);

  // mix
  gl_FragColor = vec4(fract(time / 4.0), fract(time / 2.0), fract(time / 8.0), 1);
}
