import * as React from 'react'
import { NextPage } from 'next'
import { Link, Heading, List, ListItem, Text, Divider, Tag } from '@chakra-ui/core'

import { Content, Page, PageBody, PageHeader } from '~/components/layouts'

const FAQPage: NextPage = () => (
  <Page title="FAQ">
    <Content>
      <PageHeader title="FAQ" />
      <PageBody>
        <Text>
          Halaman ini berisi pertanyaan yang sering ditanyakan pada grup Telegram kami. Ingin menambahkan pertanyaan baru? Submit di{' '}
          <Link href="https://github.com/reactjs-id/website">repositori GitHub ini</Link>.
        </Text>
        <Divider />
        <Heading as="h3" size="lg">
          Saya masih newbie. Boleh minta e-book untuk belajar React? Adakah tutorial React berbahasa Indonesia?
        </Heading>
        <Divider />
        <List styleType="disc">
          <ListItem>
            Kami menyarankan untuk membaca dokumentasi resmi React yang bisa kalian temui{' '}
            <Link href="https://reactjs.org/">di situs resmi React</Link>.
          </ListItem>
          <ListItem>
            Jika kalian merasa dokumentasi React masih belum memadai, atau kalian tipe yang lebih ingin belajar melalui video, maka Anda
            bisa menonton video mas <b>prawito hudoro</b> yang bisa kalian tonton di{' '}
            <Link href="https://www.youtube.com/watch?v=5kHyviqjhCk&list=PLU4DS8KR-LJ03qEsHn9zV4qdhcWtusBqb">channel YouTube-nya</Link>.
          </ListItem>
        </List>
        <Divider />
        <Heading as="h3" size="lg">
          JavaScript dulu atau React dulu?
        </Heading>
        <Divider />
        <Text>
          JavaScript dulu, karena React dibuat menggunakan JavaScript, sehingga jika sudah paham konsep JavaScript maka untuk memahami React
          tidak akan terlalu susah. Lebih dari itu, mempelajari JavaScript juga dapat membantu pemahaman logika kalian dalam menyelesaikan
          masalah.
        </Text>
        <Divider />
        <Heading as="h3" size="lg">
          Lebih baik React, Vue atau Angular?
        </Heading>
        <Divider />
        <Text>
          Semua itu tergantung. Pada dasarnya, lebih baik untuk belajar logika pemrograman terlebih dahulu ketimbang harus belajar
          framework, karena framework tidak lekang oleh waktu. Siapa yang menjamin 3-5 tahun dari sekarang framework atau library di atas
          masih tetap eksis?
        </Text>
        <Divider />
        <Heading as="h3" size="lg">
          Bisakah menggunakan Laravel dengan React?
        </Heading>
        <Divider />
        <Text>
          Tentu bisa. Pada dasarnya, hasil output React hanyalah file HTML statis yang dapat diunggah di host manapun. Untuk panduan
          menggunakan Laravel dengan React, baca <Link href="https://laravel.com/docs/6.x/frontend#using-react">dokumentasi Laravel</Link>{' '}
          berikut ini.
        </Text>
        <Divider />
        <Heading as="h3" size="lg">
          Apakah Google (SEO) tidak bisa membaca SPA (JS, React, Vue,dll) ?
        </Heading>
        <Divider />
        <Text>
          Tentu bisa. Mau itu Multiple Page Application (MPA) / Single Page Application (SPA), selama kita (manusia) bisa membaca, maka bot
          search engine juga bisa membacanya, karena GoogleBot juga pakai Chrome yang kita pakai.{' '}
          <Link href="https://t.me/react_id/79365">~Pradita Utama</Link>
        </Text>
        <Divider />
        <Text>Referensi terkait SEO:</Text>
        <Divider />
        <List as="ol" styleType="decimal">
          <ListItem>
            <Link href="https://t.me/react_id/77390">Mitos tentang SEO dan SPA</Link>.
          </ListItem>
          <ListItem>
            <Link href="https://medium.com/@pradita.utama/javascript-sosial-media-dan-seo-d9c4940e60fd">
              Javascript, Sosial Media dan SEO
            </Link>
            .
          </ListItem>
        </List>
        <Divider />
        <Heading as="h3" size="lg">
          Bagaimana mengatasi error CORS saat fetching API ?
        </Heading>
        <Divider />
        <List as="ol" styleType="decimal">
          <ListItem>CORS itu harus diubah di sisi backend, bukan sisi front end.</ListItem>
          <ListItem>
            Jadi ketika kita mengakses resource dari domain / server tertentu, si server tersebut harus allow domain kita / semua domain
            untuk mengakses resource yang ada di servernya. Caranya (di sisi backend ya) dengan menambahkan response header
            <Tag>Access-Control-Allow-Origin: *</Tag>
          </ListItem>
          <ListItem>
            CORS itu bukan bug, dia adalah safety feature agar server API kita gak bisa diakses sembarangan oleh browser{' '}
            <Link href="https://t.me/react_id/55955">~Pradita Utama</Link>
          </ListItem>
        </List>
        <Divider />
        <Text>Referensi terkait CORS:</Text>
        <Divider />
        <List as="ol" styleType="decimal">
          <ListItem>
            <Link href="https://twitter.com/b0rk/status/1162392625057583104?s=19">Gambaran tentang CORS</Link>.
          </ListItem>
        </List>
      </PageBody>
    </Content>
  </Page>
)

export default FAQPage
