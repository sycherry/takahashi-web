import React from 'react';
import Layout from '../components/layout';
import { Config } from '@utils/config';
import PageMeta from '@components/pageMeta';

const pageTitle = 'プライバシーポリシー';
const pageDescription = '髙橋昌之建築事務所のプライバシーポリシーのページです。';

export default function Privacy() {
  return (
    <Layout>
      <PageMeta
        title={`${pageTitle}`}
        description={pageDescription}
        url={`${Config.pageMeta.home.url}/privacy`}
      />
      <article className="text-xs max-w-screen-md mx-auto px-6 md:px-8 lg:px-10">
        <h2
          className="text-xl md:text-2xl mb-6 md:mb-8 lg:mb-10 uppercase"
        >Privacy policy
        </h2>

        <h3>1．個人情報の定義</h3>
        <p>個人情報とは、当社が「2.個人情報の収集手段」で定める手段によって取得する氏名、住所、電話番号、電子メールアドレス、
          サービスのご利用に関する情報、お問い合せ・依頼内容、当社のウェブサイトの閲覧履歴、その他の記述等により、
          その情報単独またはそれら情報を組み合わせることで、個人を特定することができる一切の情報をいいます。
        </p>
        <h3>2．個人情報の取得手段</h3>
        <p>
          髙橋昌之建築設計事務所は、以下の手段により、個人情報を取得させていただきます。
        </p>
        <p>（1）ウェブサイトを通じての収集</p>
        <p>（2）書面での直接的な収集</p>
        <p>（3）電子メール・郵便・電話または口頭等の手段による収集</p>
        <p>（4）上記以外で個人情報をいただくことが想定される一切の手段による収集</p>
        <h3>3．個人情報利用目的の特定</h3>

        <p>髙橋昌之建築設計事務所は、個人情報を取り扱うにあたって、その利用の目的を出来る限り特定します。</p>

        <h3>4．個人情報利用の制限</h3>
        <p>髙橋昌之建築設計事務所は、あらかじめご本人の同意を得ず、利用目的の達成に必要な範囲を超えて
          個人情報を取扱うことはありません。合併その他の理由により個人情報を取得した場合にも、
          あらかじめご本人の同意を得ないで、承継前の利用目的の範囲を超えて取扱うことはありません。ただし、次の場合はこの限りではありません。
        </p>
        <p>（1）法令に基づく場合</p>
        <p>（2）人の生命、身体または財産の保護のために必要がある場合であって、ご本人の同意を得ることが困難であるとき</p>
        <p>（3）公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、ご本人の同意を得ることが困難であるとき</p>
        <p>（4）国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、
          ご本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</p>
        <h3>5．個人情報の適正な取得</h3>

        <p>髙橋昌之建築設計事務所は、適正に個人情報を取得し、偽りその他不正の手段により取得することはありません。
          また、15歳未満の子供から親権者の同意なく個人に関する情報をみだりに収集しないよう留意します。</p>

        <h3>6．個人情報の利用目的</h3>

        <p>髙橋昌之建築設計事務所は、個人情報を、以下の何れかに該当する場合を除き、事前にお知らせした利用目的以外には利用いたしません。</p>

        <p>（1）個人を特定しない統計的情報の形で、マーケティング等、当社の今後の活動に活かしていくため。</p>
        <p>（2）お客様からのご要望への対応・サービスの提供のため</p>
        <p>（3）お客様が利用されたサービスに関する問い合せ・ご依頼への対応するため
          （なお、サービスに関して生じた問題・不具合等に対して、お客様にご連絡するなど、
          お客様よりいただいた情報をもって解決を図る場合があります。）</p>
        <p>（4）弊社からの各種カタログ・ダイレクトメール・電子メールの送付、アンケートの実施、お電話での商品・サービスのご紹介、催事</p>
        <p>（5）イベントや店舗のご案内等のため</p>
        <p>（6）契約内容の履行、履行請求等のため</p>
        <p>（7）法令等に基づく利用のため</p>
        <h3>7．個人情報の安全管理・従業員の監督</h3>

        <p>髙橋昌之建築設計事務所は、個人情報の漏洩、滅失またはき損の防止その他の個人情報の安全管理が図られるよう、
          個人情報保護規程を定め、従業員に対する必要かつ適切な監督を行います。</p>

        <h3>8．第三者提供の制限</h3>

        <p>髙橋昌之建築設計事務所は、次に掲げる場合を除くほか、あらかじめご本人の同意を得ないで、個人情報を第三者に提供しません。</p>

        <p>（1）法令に基づく場合</p>
        <p>（2）人の生命、身体または財産の保護のために必要がある場合であって、ご本人の同意を得ることが困難であるとき</p>
        <p>（3）公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、ご本人の同意を得ることが困難であるとき</p>
        <p>（4）国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める
          事務を遂行することに対して協力する必要がある場合であってご本人の同意を
          得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</p>
        <p>（5）ご本人を識別できない状態で提供する場合</p>

        <p>（6）ご本人を識別できない状態で提供する場合</p>

        <p>（7）ご当社との間で、機密保持契約を締結している協力会社・提携会社および業務委託先会社に対して、
          利用目的の達成に必要な範囲内で個人情報の取扱いを委託する場合</p>

        <h3>9．個人情報の開示</h3>

        <p>髙橋昌之建築設計事務所は、個人情報の主体であるご本人による、
          当社にて保管されている個人情報の開示、訂正及び個人情報に関する苦情、
          相談その他問い合せについては、適切かつ迅速に対応していきます。
          ただし、開示することにより次のいずれかに該当する場合は、
          その全部または一部を開示しないこともあり、開示しない決定をした場合には、
          その旨を遅滞なく通知します。ご希望される方は、本文末尾の「個人情報お問い合せ窓口」をご覧下さい。</p>

        <p>（1）ご依頼のあった情報項目が、保有個人データに該当しない場合</p>
        <p>（2）本人確認および代理権確認ができない場合</p>
        <p>（3）本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</p>
        <p>（4）当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</p>
        <p>（5）他の法令に違反することとなる場合</p>
        <h3>10．個人情報の訂正等</h3>

        <p>髙橋昌之建築設計事務所は、ご本人から、個人情報が真実でないという理由によって、内容の訂正、追加または削除（以下「訂正等」といいます）
          を求められた場合には、他の法令の規定により特別の手続きが定められている場合を除き、
          利用目的の達成に必要な範囲内において、遅滞なく必要な調査を行い、
          その結果に基づき、個人情報の内容の訂正等を行い、その旨ご本人に通知します。</p>

        <h3>11．個人情報の利用停止等</h3>

        <p>髙橋昌之建築設計事務所は、ご本人から、ご本人の個人情報が、
          あらかじめ公表された利用目的の範囲を超えて取り扱われているという理由、
          または偽りその他不正の手段により取得されたものであるという理由により、
          その利用の停止または消去（以下「利用停止等」といいます）を求められた場合には、
          遅滞なく必要な調査を行い、その結果に基づき、個人情報の利用停止等を行い、
          その旨ご本人に通知します。ただし、個人情報の利用停止等に多額の費用を有する場合その他利用停止等を行うことが困難な場合であって、
          ご本人の権利利益を保護するために必要なこれに代わるべき措置をとれる場合は、この代替策を講じます。</p>

        <h3>12．理由の説明</h3>

        <p>髙橋昌之建築設計事務所は、ご本人からの要求にもかかわらず、</p>

        <p>（1）利用目的を通知しない</p>
        <p>（2）個人情報の全部または一部を開示しない</p>
        <p>（3）個人情報の利用停止等を行わない</p>
        <p>（4）個人情報の第三者提供を停止しない</p>
        <p>のいずれかを決定する場合、その旨ご本人に通知する際に理由を説明するよう努めます。</p>

        <h3>13．お問い合わせ</h3>

        <p>個人情報の取扱に関するお問い合せはコンタクトフォームからお問い合わせください。</p>
      </article>
    </Layout>
  );
}
