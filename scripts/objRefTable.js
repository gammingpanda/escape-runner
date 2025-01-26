const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.TiledBg,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Plugins.Touch,
		C3.Plugins.SpeechSynthesis,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.SpeechSynthesis.Acts.SpeakText,
		C3.Plugins.Keyboard.Cnds.OnKey
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{TiledBackground: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{ScrollTo: 0},
	{Platform: 0},
	{Sprite4: 0},
	{TiledBackground2: 0},
	{Solid: 0},
	{TiledBackground3: 0},
	{Sprite5: 0},
	{TiledBackground4: 0},
	{Sprite6: 0},
	{Keyboard: 0},
	{Touch: 0},
	{SpeechSynthesis: 0},
	{Sprite7: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	TiledBackground3: class extends self.ITiledBackgroundInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	TiledBackground4: class extends self.ITiledBackgroundInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	Touch: class extends self.IInstance {},
	SpeechSynthesis: class extends self.IInstance {},
	Sprite7: class extends self.ISpriteInstance {}
}