import * as React from 'react'
import { NextPage } from 'next'
import { Link, Heading, List, ListItem, Text, Divider } from '@chakra-ui/core'

import { Content, Page, PageBody, PageHeader } from '~/components/layouts'

const AjukanTopikPage: NextPage = () => (
  <Page title="Ajukan Topik">
    <Content>
      <PageHeader title="Ajukan Topik" />
      <PageBody>
        <Text>
          Punya ide topik untuk pertemuan berikutnya? Ajukan topikmu melalui{' '}
          <Link href="https://github.com/reactjs-id/meetup">repositori GitHub ini</Link>.
        </Text>
        <Divider />
        <Heading as="h3" size="lg">
          Proses pengajuan topik
        </Heading>
        <Divider />
        <Text>
          Kita mengikuti sistem yang digunakan oleh JakartaJS yang memanfaatkan GitHub. Untuk mengajukan topikmu, silakan buat issue GitHub
          mengikuti contoh yang telah disediakan. Selanjutnya kami akan mengulas pengajuan Anda, apabila topik Anda terpilih, kami akan
          menghubungi Anda untuk melakukan penjadwalan pertemuan berikutnya.
        </Text>
        <Text>Kita memiliki dua jenis topik pembahasan:</Text>
        <List styleType="disc">
          <ListItem>Pembahasan Singkat / Lightning Talk (5-15 menit)</ListItem>
          <ListItem>Pembahasan Utuh / Full Talk (30-45 menit)</ListItem>
        </List>
        <Text>
          Perlu diperhatikan bahwa pembahasan singkat (lightning talk) ini bersifat informal, jadi tidak harus melalu proses pengajuan dan
          persetujuan terlebih dahulu. Di setiap pertemuannya, kami akan sediakan sesi khusus untuk ini, apabila sudah tiba waktunya,
          silakan ajukan diri secara langsung di tempat.{' '}
          <span role="img" aria-label="emoji">
            😉
          </span>
        </Text>
        <Divider />
        <Heading as="h3" size="lg">
          Mempersiapkan presentasi topik
        </Heading>
        <Divider />
        <Text>
          Jika ini pertama kalinya kamu menyajikan topikmu di depan umum, Anda dapat belajar beberapa tips dan trik dalam menyampaikan
          materi dengan baik. Anda dapat mulai mempelajarinya dari <Link href="https://github.com/reactjs-id/meetup">speaking.io</Link>.
          Perhatikan bahwa hampir di setiap lokasi kami hanya menyediakan mikrofon tangan yang harus Anda pegang sendiri, bukan headset atau
          semacamnya. Jadi berlatihlah menyajikan materi Anda sambil memegang mikrofon.
        </Text>
      </PageBody>
    </Content>
  </Page>
)

export default AjukanTopikPage
