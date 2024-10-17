import React from 'react';
import Header from "@/features/header";
import './style.css';
import BackSquare1 from '@/features/ui/square1';
import BackSquare2 from '@/features/ui/square2';
import BackSquare3 from '@/features/ui/square3';
import BackSquare4 from '@/features/ui/square4';
import BackSquare5 from '@/features/ui/square5';
export default function Introduction() {
    return(
    <>
        <Header ></Header>
        <div className='main justify-center flex flex-wrap pt-[70px] pb-[40px] bg-kct-black'>
        <h1 className='year text-4xl w-full p-[2%] text-white font-mono'>一年坊</h1>
        <BackSquare1
            Class="1-1 脱獄タイムアタック"
            Intro="刑務所からの脱獄！罠や謎を速く正確に解きまくれ！！"
        />
        <BackSquare2
            Class="1-2 ホラー脱出ゲーム"
            Intro="私たちはホラー要素を含んだ脱出ゲームを作りました。是非いらしてください。"
        />
        <BackSquare3
            Class="1-3 亡くし者"
            Intro="カラダ探しをモチーフにお化け屋敷を作りました！"
        />
        <BackSquare4
            Class="1-4 高専カジノ"
            Intro="遊びながら『景品』で大儲けも夢じゃない！？(子供も遊べます)"
        />
        <BackSquare5
            Class="1-5 メカニカルシューター"
            Intro="あなたの家に特殊部隊が攻め込んできても安心安全撃退できます！"
        />
        <h1 className='year text-4xl w-full p-[2%] text-white font-mono'>二年坊</h1>
        <BackSquare1
            Class="2-1 バルーンアート教室"
            Intro="2-1生徒と一緒にバルーンアートを作ったり，作ったアートを展示します"
        />
        <BackSquare2
            Class="2-2 カジノ"
            Intro="2-2 様々なカジノゲームで遊びます"
        />
        <BackSquare3
            Class="2-3 フォトスポット"
            Intro="<ここにキャッチコピーを入力してください>"
        />
        <BackSquare4
            Class="2-4 VS2-4"
            Intro="VS嵐を基に3つの遊びを用意しています！ぜひ遊びに来てください！"
        />
        <BackSquare5
            Class="2-5 お化け屋敷"
            Intro="暗闇の中にこわ～いお化けが潜んでいるかも？！ぜひお越しください！"
        />
        <h1 className='year text-4xl w-full p-[2%] text-white font-mono'>三ガキ</h1>
        <BackSquare1
            Class="3-1 キッキングスナイパー"
            Intro="某テレビ番組で大人気だったゲームが復活！思い切り楽しもう！"
        />
        <BackSquare2
            Class="3-2 脱出ゲーム"
            Intro="ピクミンをモチーフにした脱出ゲームです。ぜひ来てください"
        />
        <BackSquare3
            Class="3-3 ハリーポッターと3Eの部屋"
            Intro="人気映画ハリー・ポッターの舞台が高専に！？君達も魔法を体験してみよう！！写真も撮れるよ！！"
        />
        <BackSquare4
            Class="3-4 コウセンオー＆類似マンション"
            Intro="デジタルカードゲーム＆ルイ〇ジマンションに類似したマンション"
        />
        <BackSquare5
            Class="3-5 高専人生ゲーム"
            Intro="高専生をゲームで類似した"
        />
        <h1 className='year text-4xl w-full p-[2%] text-white font-mono'>四年児</h1>
        <BackSquare1
            Class="4-M(機械) KOUSEN UCHIDA"
            Intro="フォトスポットです(*^^*)ぜひみんな来てください"
        />
        <BackSquare2
            Class="4-R(知能) ピタゴラレース"
            Intro="ピタゴラスイ〇チ風のビー玉レースを予定しています"
        />
        <BackSquare3
            Class="4-E(電気) 人間モグラ叩き"
            Intro="説明"
        />
        <BackSquare4
            Class="4-I(情報) 4Iプロコン"
            Intro="詳しくはこのQRコードをチェック！"
        />
        <BackSquare5
            Class="4-C(科学) 科学遊び"
            Intro="皆が知っているあの遊びに科学風にアレンジしました！"
        />
        <h1 className='year text-4xl w-full p-[2%] text-white font-mono'>五年</h1>
        <BackSquare1
            Class="5-M(機械) ロボット展示"
            Intro="授業で作ったロボットを展示しています！ぜひ来てください！"
        />
        <BackSquare2
            Class="5-R(知能) 人間サイズボードゲーム"
            Intro="ハリー・ポッターの世界を再現！等身大のチェス駒を動かして楽しもう"
        />
        <BackSquare3
            Class="5-E(電気) 手作り射的"
            Intro="手作り射的で動く的を射抜くゲームです。目指せハイスコア！"
        />
        <BackSquare4
            Class="5-I(情報) nit-kit-center"
            Intro="高専で学んだ魏喩つの集大成！手作りゲームセンターで特別な体験を！"
        />
        <BackSquare5
            Class="5-C(科学) 劇場版名探偵みっちゃん~手殷の前夜祭~"
            Intro="5Cにて殺人事件！？見た目は少年頭脳は中年その名も名探偵みっちゃん"
        />
        <h1 className='year text-4xl w-full p-[2%] text-white font-mono'>クラブバザー</h1>
        <h3 className='year text-4xl w-full p-[2%] text-white font-mono'>屋内バザー</h3>
        <BackSquare5
            Class="コンピュータ研究会"
            Intro="オリジナルグッズ"
        />
        <BackSquare5
            Class="美術部"
            Intro="イラスト本，色紙，ポスターカード"
        />
        <h2 className='year text-4xl w-full p-[2%] text-white font-mono'>屋外バザー</h2>
        <BackSquare5
            Class="弓道部"
            Intro="焼き鳥"
        />
        <BackSquare5
            Class="吹奏楽部"
            Intro="フランクフルト"
        />
        <BackSquare5
            Class="卓球部"
            Intro="わらび餅ドリンク"
        />
        <BackSquare5
            Class="バドミントン部"
            Intro="五平餅"
        />
        <BackSquare5
            Class="科学愛好会"
            Intro="白玉団子"
        />
        <BackSquare5
            Class="高専企業部"
            Intro="キーホルダー"
        />
        <BackSquare5
            Class="ロボットデザイン研究会"
            Intro="ベビーカステラ"
        />
        <BackSquare5
            Class="硬式テニス部"
            Intro="フルーツドリンク"
        />
        <BackSquare5
            Class="武道部(空手，柔道，剣道）"
            Intro="白玉ソーダ"
        />
        <BackSquare5
            Class="女子寮"
            Intro="ワッフル"
        />
        <BackSquare5
            Class="陸上部"
            Intro="カレー"
        />
        <BackSquare5
            Class="ソフトテニス部"
            Intro="わたがし"
        />
        <BackSquare5
            Class="女子バスケ部"
            Intro="焼きうどん"
        />
        <BackSquare5
            Class="ラグビー部"
            Intro="プロテイン飲料"
        />
        <BackSquare5
            Class="サッカー部"
            Intro="うどん"
        />
        <BackSquare5
            Class="男子バスケ部"
            Intro="ホットサンド"
        />
        <BackSquare5
            Class="男子寮"
            Intro="焼き餃子"
        />
        <BackSquare5
            Class="野球部"
            Intro="ホットドッグ"
        />
        <BackSquare5
            Class="男子バレー部"
            Intro="たこ焼き"
        />
        <BackSquare5
            Class="ハンドボール部"
            Intro="焼きそば"
        />
        <BackSquare5
            Class="ロボコン"
            Intro="パンケーキ"
        />
        <BackSquare5
            Class="学生会"
            Intro="フライドポテト・ベビーカステラ"
        />


        </div>
    </>
    );
}