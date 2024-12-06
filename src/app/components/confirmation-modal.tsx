import { Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function ConfirmationModal() {
  return (
    <Card className="mx-auto w-full max-w-sm p-6 rounded-xl bg-white">
      <div className="text-center space-y-6">
        <h2 className="text-xl font-bold">おしごとが確定しました</h2>

        <div className="relative w-32 h-32 mx-auto">
          <Calendar className="w-full h-full text-red-400" />
          <span className="absolute top-0 right-0 text-yellow-400">✨</span>
          <span className="absolute bottom-0 left-0 text-yellow-400">✨</span>
          <span className="absolute top-1/2 right-0 text-yellow-400">✨</span>
        </div>

        <div className="space-y-2">
          <p className="flex items-center justify-center gap-2">
            おしごと画面から確認できます💡
          </p>
          <p className="text-sm text-gray-600">
            当日は始業時間の前までに
            <br />
            勤務先に到着するようにしてください。
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-medium">
            事前におしごと動画を確認しましょう。
          </p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center"
              >
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/80 flex items-center justify-center">
                  ▶️
                </div>
              </div>
            ))}
          </div>
        </div>

        <a href="#" className="block text-blue-500 text-sm">
          雇用契約について
        </a>

        <Button className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-500 hover:bg-blue-600 text-white">
          OK
        </Button>
      </div>
    </Card>
  );
}
