precision mediump float;

uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;

void main() {
  vec2 st = gl_FragCoord.xy / resolution;
  // gl_FragColor = vec4(st.x , st.y, 0, 1);
  // gl_FragColor = vec4(st.x, 0, 0, 1);
  // gl_FragColor = vec4(st.y, 0, 0, 1);
  // gl_FragColor = vec4(1.0 - st.x, 0, 0, 1);
  // gl_FragColor = vec4(1.0 - st.y, 0, 0, 1);

  // |
  // gl_FragColor = vec4(min(st.x, 1.0- st.x), 0, 0, 1);

  // -
  // gl_FragColor = vec4(min(st.y, 1.0- st.y), 0, 0, 1);

  // X
  // gl_FragColor = vec4(min(min(st.x, 1.0 - st.x), min(st.y, 1.0- st.y)), 0, 0, 1);

  // <- min max ->
  // vec2 p = gl_FragCoord.xy / resolution * mouse;
  // gl_FragColor = vec4(p.x, 0, 0, 1);

  // follow cursor
  // vec2 p = 1. - abs(gl_FragCoord.xy / resolution - mouse);
  // gl_FragColor = vec4(min(p.x, p.y), 0, 0, 1);

  // red blink 3 times for each green blink once
  gl_FragColor = vec4(st.x * fract(time), st.y * fract(time / 3.0), 0, 1);
}
