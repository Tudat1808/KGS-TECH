<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('blog_posts')->insert([
            [
                'title_key' => 'blog.post1Title',
                'description_key' => 'blog.post1Description',
                'image_url' => 'https://emmareed.net/wp-content/uploads/2017/10/blog-2355684_1920.jpg',
                'date' => '2025-01-01',
            ],
            [
                'title_key' => 'blog.post2Title',
                'description_key' => 'blog.post2Description',
                'image_url' => 'https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png',
                'date' => '2025-01-02',
            ],
            [
                'title_key' => 'blog.post3Title',
                'description_key' => 'blog.post3Description',
                'image_url' => 'https://mailrelay.com/wp-content/uploads/2017/04/video-tutoriales-sobre-email-marketing.jpg',
                'date' => '2025-01-03',
            ],
            [
                'title_key' => 'blog.post4Title',
                'description_key' => 'blog.post4Description',
                'image_url' => 'https://chonweb.vn/hsc_content/hsc_up_dinhkem/1625816574.png',
                'date' => '2025-01-04',
            ],
            [
                'title_key' => 'blog.post5Title',
                'description_key' => 'blog.post5Description',
                'image_url' => 'https://www.nameboy.com/wp-content/uploads/2021/02/Nameboy-Blog-graphics.png',
                'date' => '2025-01-05',
            ],
            [
                'title_key' => 'blog.post6Title',
                'description_key' => 'blog.post6Description',
                'image_url' => 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png',
                'date' => '2025-01-06',
            ],
            [
                'title_key' => 'blog.post7Title',
                'description_key' => 'blog.post7Description',
                'image_url' => 'https://www.beeblueg.com/images/bbg-blog/january-2020/whatisblog.png',
                'date' => '2025-01-07',
            ],
            [
                'title_key' => 'blog.post8Title',
                'description_key' => 'blog.post8Description',
                'image_url' => 'https://eastsidewriters.com/wp-content/uploads/2021/06/featured-13.jpg',
                'date' => '2025-01-08',
            ],
            [
                'title_key' => 'blog.post9Title',
                'description_key' => 'blog.post9Description',
                'image_url' => 'https://blogencounters.com/wp-content/uploads/2023/01/blogideas.jpg',
                'date' => '2025-01-09',
            ],
            [
                'title_key' => 'blog.post10Title',
                'description_key' => 'blog.post10Description',
                'image_url' => 'https://www.blogtyrant.com/wp-content/uploads/2017/02/how-to-write-a-good-blog-post.png',
                'date' => '2025-01-10',
            ]
        ]);
    }
}
