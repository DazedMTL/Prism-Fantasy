//=============================================================================
// ForcemogFocus.js
//=============================================================================

/*:ja
 * @plugindesc ver1.00 battlehudアニメ調整
 * @author まっつＵＰ
 *
 * @help
 * 
 * RPGで笑顔を・・・
 * 
 * このヘルプとパラメータの説明をよくお読みになってからお使いください。
 * 素材のみの販売はダメです。
 * 上記以外の規約等はございません。
 * もちろんツクールMVで使用する前提です。
 * 何か不具合ありましたら気軽にどうぞ。
 *  
 * 免責事項：
 * このプラグインを利用したことによるいかなる損害も制作者は一切の責任を負いません。
 * 
 */

(function () {

    var _Sprite_Animation_updatePosition = Sprite_Animation.prototype.updatePosition;
    Sprite_Animation.prototype.updatePosition = function () {
        _Sprite_Animation_updatePosition.call(this);
        if (this._animation.position === 3) {
            this.x = Graphics.boxWidth / 2;
            this.y = Graphics.boxHeight / 2;
        }
    };

})();
